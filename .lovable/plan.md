
# Hapio Booking Integration

## What We Have
The edge function (`supabase/functions/hapio/index.ts`), client library (`src/lib/hapio.ts`), and `HAPIO_API_KEY` secret are already in place. The current Cita page uses a static form with hardcoded services and time slots.

## What We'll Build
Transform the Cita page into a dynamic, step-by-step booking flow powered by Hapio's real-time availability API.

## User Flow

```text
Step 1: Personal Info       Step 2: Select Service      Step 3: Pick Date/Time       Step 4: Confirm
+-----------------+        +------------------+        +-------------------+        +-----------------+
| Name            |  -->   | Load services    |  -->   | Calendar picker   |  -->   | Review summary  |
| Phone           |        | from Hapio API   |        | Show available    |        | Submit booking  |
| Email           |        | Click to select  |        | slots from Hapio  |        | via Hapio API   |
+-----------------+        +------------------+        +-------------------+        +-----------------+
```

## Implementation Steps

### 1. Rewrite Cita page as a multi-step booking wizard
- **Step 1 - Contact Info**: Name, phone, email (keeps current fields)
- **Step 2 - Service Selection**: Fetch services from Hapio via `getServices()`, display as selectable cards with name and duration
- **Step 3 - Date and Time**: Date picker, then fetch real available slots via `getBookableSlots()` for the selected date. Display slots as clickable time buttons (replacing the hardcoded list)
- **Step 4 - Confirmation**: Show booking summary, submit via `createBooking()` with patient metadata

### 2. Use React Query for data fetching
- `useQuery` for services (fetched once on mount)
- `useQuery` for locations (fetched once, auto-select first/only location)
- `useQuery` for bookable slots (fetched when service + date are selected, refetches on date change)
- `useMutation` for creating the booking

### 3. Loading and error states
- Skeleton loaders while services and slots load
- Error message with retry if Hapio API is unreachable
- Disable "next" buttons until required fields are filled
- Show loading spinner during booking submission

### 4. Keep existing design language
- Same card styling (`bg-card border rounded-2xl shadow-card`)
- Same Framer Motion animations
- Same phone/hours fallback section below the form
- Progress indicator showing current step (1/4)

## Technical Details

### Files modified
- **`src/pages/Cita.tsx`** - Complete rewrite as multi-step wizard with Hapio integration

### Files unchanged
- **`src/lib/hapio.ts`** - Already has all needed functions
- **`supabase/functions/hapio/index.ts`** - Already handles all needed actions

### Key considerations
- The first location is auto-selected (dental clinics typically have one location)
- Slots are fetched for the selected date (from midnight to midnight in the clinic's timezone)
- Patient info (name, email, phone, notes) is sent as booking metadata
- If Hapio API fails, the form gracefully degrades showing an error with the phone number as fallback
