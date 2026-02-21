import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const HAPIO_BASE = 'https://eu-central-1.hapio.net/v1';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const HAPIO_API_KEY = Deno.env.get('HAPIO_API_KEY');
  if (!HAPIO_API_KEY) {
    return new Response(JSON.stringify({ error: 'HAPIO_API_KEY is not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { action, ...params } = await req.json();

    const hapioHeaders = {
      'Authorization': `Bearer ${HAPIO_API_KEY}`,
      'Content-Type': 'application/json',
    };

    let response: Response;

    switch (action) {
      case 'get-services': {
        response = await fetch(`${HAPIO_BASE}/services`, {
          method: 'GET',
          headers: hapioHeaders,
        });
        break;
      }

      case 'get-locations': {
        response = await fetch(`${HAPIO_BASE}/locations`, {
          method: 'GET',
          headers: hapioHeaders,
        });
        break;
      }

      case 'get-bookable-slots': {
        const { serviceId, locationId, from, to } = params;
        if (!serviceId || !locationId || !from || !to) {
          return new Response(JSON.stringify({ error: 'Missing required params: serviceId, locationId, from, to' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
        const url = `${HAPIO_BASE}/services/${serviceId}/bookable-slots?location=${locationId}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
        response = await fetch(url, {
          method: 'GET',
          headers: hapioHeaders,
        });
        break;
      }

      case 'create-booking': {
        const { serviceId, locationId, startsAt, endsAt, metadata } = params;
        if (!serviceId || !locationId || !startsAt || !endsAt) {
          return new Response(JSON.stringify({ error: 'Missing required params: serviceId, locationId, startsAt, endsAt' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
        response = await fetch(`${HAPIO_BASE}/bookings`, {
          method: 'POST',
          headers: hapioHeaders,
          body: JSON.stringify({
            service_id: serviceId,
            location_id: locationId,
            starts_at: startsAt,
            ends_at: endsAt,
            is_temporary: false,
            metadata: metadata || null,
          }),
        });
        break;
      }

      default:
        return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }

    const data = await response.json();
    if (!response.ok) {
      console.error(`Hapio API error [${response.status}]:`, JSON.stringify(data));
      return new Response(JSON.stringify({ error: 'Hapio API error', details: data, status: response.status }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Edge function error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
