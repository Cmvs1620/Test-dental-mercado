import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Calendar as CalendarIcon, Phone, Clock, CheckCircle, ArrowLeft, ArrowRight, Loader2, AlertCircle, User, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getServices, getLocations, getBookableSlots, createBooking, type HapioService, type BookableSlot } from "@/lib/hapio";
import { format, addDays, startOfDay, endOfDay } from "date-fns";
import { es } from "date-fns/locale";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "Nombre requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().min(1, "Teléfono requerido").max(20),
});

const STEPS = ["Datos", "Servicio", "Fecha y Hora", "Confirmar"];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

const Cita = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [contact, setContact] = useState({ nombre: "", email: "", telefono: "" });
  const [selectedService, setSelectedService] = useState<HapioService | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<BookableSlot | null>(null);
  const [notas, setNotas] = useState("");

  // Fetch services
  const { data: services, isLoading: loadingServices, error: servicesError, refetch: refetchServices } = useQuery({
    queryKey: ["hapio-services"],
    queryFn: getServices,
  });

  // Fetch locations (auto-select first)
  const { data: locations } = useQuery({
    queryKey: ["hapio-locations"],
    queryFn: getLocations,
  });
  const locationId = locations?.[0]?.id;

  // Fetch slots when service + date selected
  const { data: slots, isLoading: loadingSlots, error: slotsError, refetch: refetchSlots } = useQuery({
    queryKey: ["hapio-slots", selectedService?.id, selectedDate?.toISOString(), locationId],
    queryFn: () => {
      if (!selectedService || !selectedDate || !locationId) return [];
      const from = startOfDay(selectedDate).toISOString();
      const to = endOfDay(selectedDate).toISOString();
      return getBookableSlots(selectedService.id, locationId, from, to);
    },
    enabled: !!selectedService && !!selectedDate && !!locationId,
  });

  // Create booking mutation
  const bookingMutation = useMutation({
    mutationFn: () => {
      if (!selectedService || !selectedSlot || !locationId) throw new Error("Missing data");
      return createBooking({
        serviceId: selectedService.id,
        locationId,
        startsAt: selectedSlot.starts_at,
        endsAt: selectedSlot.ends_at,
        metadata: {
          patient_name: contact.nombre,
          patient_email: contact.email,
          patient_phone: contact.telefono,
          notes: notas || undefined,
        },
      });
    },
    onSuccess: () => setSubmitted(true),
    onError: (err: Error) => {
      toast({ title: "Error al reservar", description: err.message, variant: "destructive" });
    },
  });

  const goNext = () => { setDirection(1); setStep((s) => Math.min(s + 1, 3)); };
  const goBack = () => { setDirection(-1); setStep((s) => Math.max(s - 1, 0)); };

  const canAdvance = () => {
    if (step === 0) {
      const result = contactSchema.safeParse(contact);
      return result.success;
    }
    if (step === 1) return !!selectedService;
    if (step === 2) return !!selectedSlot;
    return true;
  };

  const handleNext = () => {
    if (step === 0) {
      const result = contactSchema.safeParse(contact);
      if (!result.success) {
        toast({ title: "Error", description: result.error.issues[0].message, variant: "destructive" });
        return;
      }
    }
    if (step === 3) {
      bookingMutation.mutate();
      return;
    }
    goNext();
  };

  if (submitted) {
    return (
      <>
        <Helmet><title>Cita Confirmada | Dental Mercado</title></Helmet>
        <section className="min-h-[80vh] flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-serif text-foreground mb-4">¡Cita confirmada!</h1>
            <p className="text-muted-foreground mb-6">
              Tu cita para <span className="font-medium text-foreground">{selectedService?.name}</span> ha sido reservada
              el <span className="font-medium text-foreground">{selectedDate && format(selectedDate, "d 'de' MMMM", { locale: es })}</span> a
              las <span className="font-medium text-foreground">{selectedSlot && format(new Date(selectedSlot.starts_at), "HH:mm")}</span>.
            </p>
            <a href="tel:+34966456124">
              <Button variant="outline" className="rounded-full gap-2">
                <Phone className="w-4 h-4" /> Llamar a la clínica
              </Button>
            </a>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Pedir Cita Online | Dental Mercado – Clínica Dental Alicante</title>
        <meta name="description" content="Pide tu cita online en Dental Mercado, clínica dental en Alicante centro. Llámanos al 966 456 124." />
      </Helmet>

      <section className="pt-32 pb-10">
        <div className="container">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Pedir Cita / Book Appointment
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-serif text-foreground mb-4">
            Reserva tu cita
          </motion.h1>
        </div>
      </section>

      {/* Progress */}
      <section className="pb-6">
        <div className="container max-w-2xl">
          <div className="flex items-center justify-between mb-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-sm hidden sm:inline ${i <= step ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-muted rounded-full h-1.5">
            <div className="bg-primary h-1.5 rounded-full transition-all duration-300" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-24">
        <div className="container max-w-2xl">
          <div className="bg-card border rounded-2xl p-8 shadow-card min-h-[400px] relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {step === 0 && <StepContact contact={contact} setContact={setContact} />}
                {step === 1 && (
                  <StepService
                    services={services}
                    loading={loadingServices}
                    error={servicesError}
                    selected={selectedService}
                    onSelect={(s) => { setSelectedService(s); setSelectedDate(undefined); setSelectedSlot(null); }}
                    onRetry={() => refetchServices()}
                  />
                )}
                {step === 2 && (
                  <StepDateTime
                    selectedDate={selectedDate}
                    onDateSelect={(d) => { setSelectedDate(d); setSelectedSlot(null); }}
                    slots={slots}
                    loadingSlots={loadingSlots}
                    slotsError={slotsError}
                    selectedSlot={selectedSlot}
                    onSlotSelect={setSelectedSlot}
                    onRetry={() => refetchSlots()}
                  />
                )}
                {step === 3 && (
                  <StepConfirm
                    contact={contact}
                    service={selectedService}
                    date={selectedDate}
                    slot={selectedSlot}
                    notas={notas}
                    setNotas={setNotas}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={goBack} disabled={step === 0} className="rounded-full gap-2">
              <ArrowLeft className="w-4 h-4" /> Atrás
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canAdvance() || bookingMutation.isPending}
              className="rounded-full gap-2"
            >
              {bookingMutation.isPending ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Reservando...</>
              ) : step === 3 ? (
                <><CalendarIcon className="w-4 h-4" /> Confirmar Cita</>
              ) : (
                <>Siguiente <ArrowRight className="w-4 h-4" /></>
              )}
            </Button>
          </div>

          {/* Fallback */}
          <div className="mt-10 text-center space-y-3">
            <p className="text-muted-foreground text-sm">¿Prefieres llamar?</p>
            <a href="tel:+34966456124" className="inline-flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" /> +34 966 456 124
            </a>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" /> L-V: 9:30 – 20:00
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ── Step Components ── */

function StepContact({ contact, setContact }: {
  contact: { nombre: string; email: string; telefono: string };
  setContact: (c: typeof contact) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-1">Tus datos de contacto</h2>
        <p className="text-muted-foreground text-sm">Para poder confirmar tu cita</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Nombre completo *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Tu nombre" value={contact.nombre} onChange={(e) => setContact({ ...contact, nombre: e.target.value })} maxLength={100} className="rounded-xl pl-10" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Teléfono *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input type="tel" placeholder="+34 ..." value={contact.telefono} onChange={(e) => setContact({ ...contact, telefono: e.target.value })} maxLength={20} className="rounded-xl pl-10" />
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input type="email" placeholder="tu@email.com" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} maxLength={255} className="rounded-xl pl-10" />
        </div>
      </div>
    </div>
  );
}

function StepService({ services, loading, error, selected, onSelect, onRetry }: {
  services?: HapioService[];
  loading: boolean;
  error: Error | null;
  selected: HapioService | null;
  onSelect: (s: HapioService) => void;
  onRetry: () => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-1">Elige un servicio</h2>
        <p className="text-muted-foreground text-sm">Selecciona el tratamiento que necesitas</p>
      </div>

      {error && (
        <div className="text-center py-8 space-y-3">
          <AlertCircle className="w-10 h-10 text-destructive mx-auto" />
          <p className="text-muted-foreground">No se pudieron cargar los servicios.</p>
          <Button variant="outline" onClick={onRetry} className="rounded-full">Reintentar</Button>
        </div>
      )}

      {loading && (
        <div className="grid sm:grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-20 rounded-xl" />)}
        </div>
      )}

      {!loading && !error && services && (
        <div className="grid sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
          {services.filter(s => s.enabled).map((s) => (
            <button
              key={s.id}
              onClick={() => onSelect(s)}
              className={`text-left p-4 rounded-xl border-2 transition-all ${
                selected?.id === s.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <p className="font-medium text-foreground text-sm">{s.name}</p>
              {s.duration && <p className="text-xs text-muted-foreground mt-1">{s.duration} min</p>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function StepDateTime({ selectedDate, onDateSelect, slots, loadingSlots, slotsError, selectedSlot, onSlotSelect, onRetry }: {
  selectedDate?: Date;
  onDateSelect: (d: Date | undefined) => void;
  slots?: BookableSlot[];
  loadingSlots: boolean;
  slotsError: Error | null;
  selectedSlot: BookableSlot | null;
  onSlotSelect: (s: BookableSlot) => void;
  onRetry: () => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-1">Fecha y hora</h2>
        <p className="text-muted-foreground text-sm">Elige el día y la hora que prefieras</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Calendar */}
        <div className="flex-shrink-0">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onDateSelect}
            disabled={(date) => date < startOfDay(new Date()) || date > addDays(new Date(), 60)}
            locale={es}
            className="rounded-xl border pointer-events-auto"
          />
        </div>

        {/* Slots */}
        <div className="flex-1 min-w-0">
          {!selectedDate && (
            <p className="text-muted-foreground text-sm py-8 text-center">Selecciona una fecha para ver las horas disponibles</p>
          )}

          {selectedDate && loadingSlots && (
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => <Skeleton key={i} className="h-10 rounded-lg" />)}
            </div>
          )}

          {selectedDate && slotsError && (
            <div className="text-center py-4 space-y-2">
              <AlertCircle className="w-8 h-8 text-destructive mx-auto" />
              <p className="text-sm text-muted-foreground">Error al cargar horarios</p>
              <Button variant="outline" size="sm" onClick={onRetry} className="rounded-full">Reintentar</Button>
            </div>
          )}

          {selectedDate && !loadingSlots && !slotsError && slots && (
            slots.length === 0 ? (
              <p className="text-muted-foreground text-sm py-8 text-center">No hay horas disponibles este día. Prueba otra fecha.</p>
            ) : (
              <div className="grid grid-cols-3 gap-2 max-h-[250px] overflow-y-auto pr-1">
                {slots.map((slot) => {
                  const time = format(new Date(slot.starts_at), "HH:mm");
                  const isSelected = selectedSlot?.starts_at === slot.starts_at;
                  return (
                    <button
                      key={slot.starts_at}
                      onClick={() => onSlotSelect(slot)}
                      className={`py-2.5 px-3 rounded-lg text-sm font-medium border-2 transition-all ${
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/30 text-foreground"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function StepConfirm({ contact, service, date, slot, notas, setNotas }: {
  contact: { nombre: string; email: string; telefono: string };
  service: HapioService | null;
  date?: Date;
  slot: BookableSlot | null;
  notas: string;
  setNotas: (n: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-1">Confirmar cita</h2>
        <p className="text-muted-foreground text-sm">Revisa los datos antes de confirmar</p>
      </div>

      <div className="space-y-3 bg-muted/50 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Paciente</span>
          <span className="text-sm font-medium text-foreground">{contact.nombre}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Teléfono</span>
          <span className="text-sm font-medium text-foreground">{contact.telefono}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Email</span>
          <span className="text-sm font-medium text-foreground">{contact.email}</span>
        </div>
        <hr className="border-border" />
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Servicio</span>
          <span className="text-sm font-medium text-foreground">{service?.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Fecha</span>
          <span className="text-sm font-medium text-foreground">{date && format(date, "d 'de' MMMM yyyy", { locale: es })}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Hora</span>
          <span className="text-sm font-medium text-foreground">{slot && format(new Date(slot.starts_at), "HH:mm")}</span>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">Notas adicionales</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Textarea
            placeholder="¿Algún detalle que debamos saber?"
            rows={3}
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            maxLength={500}
            className="rounded-xl pl-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Cita;
