const SUPABASE_PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;

const getBaseUrl = () => {
  if (SUPABASE_PROJECT_ID) {
    return `https://${SUPABASE_PROJECT_ID}.supabase.co/functions/v1`;
  }
  // Fallback for local dev
  return 'http://localhost:54321/functions/v1';
};

async function callHapio(body: Record<string, unknown>) {
  const res = await fetch(`${getBaseUrl()}/hapio`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || data.details?.message || 'Hapio API error');
  }
  return data;
}

export interface HapioService {
  id: string;
  name: string;
  price: string | null;
  type: string;
  duration?: string;
  enabled: boolean;
}

export interface HapioLocation {
  id: string;
  name: string;
  time_zone: string;
  enabled: boolean;
}

export interface BookableSlot {
  starts_at: string;
  ends_at: string;
  resource: { id: string; name: string } | null;
}

export async function getServices(): Promise<HapioService[]> {
  const data = await callHapio({ action: 'get-services' });
  return data.data || [];
}

export async function getLocations(): Promise<HapioLocation[]> {
  const data = await callHapio({ action: 'get-locations' });
  return data.data || [];
}

export async function getBookableSlots(
  serviceId: string,
  locationId: string,
  from: string,
  to: string
): Promise<BookableSlot[]> {
  const data = await callHapio({
    action: 'get-bookable-slots',
    serviceId,
    locationId,
    from,
    to,
  });
  return data.data || [];
}

export async function createBooking(params: {
  serviceId: string;
  locationId: string;
  startsAt: string;
  endsAt: string;
  metadata?: Record<string, unknown>;
}) {
  return callHapio({
    action: 'create-booking',
    ...params,
  });
}
