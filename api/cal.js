// api/cal.js - Vercel Serverless Function for Cal.com API
// This runs on the backend and keeps your API key secure

export default async function handler(req, res) {
    // API key from environment variable (set in Vercel dashboard)
    const CAL_API_KEY = process.env.CAL_API_KEY;

    if (!CAL_API_KEY) {
        return res.status(500).json({ error: 'Cal.com API key not configured' });
    }

    // Enable CORS for your domain
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // GET available slots
    if (req.method === 'GET' && req.query.action === 'slots') {
        try {
            const { startTime, endTime, eventTypeId } = req.query;

            if (!eventTypeId) {
                return res.status(400).json({ error: 'eventTypeId required' });
            }

            const url = `https://api.cal.com/v1/slots?apiKey=${CAL_API_KEY}&startTime=${startTime}&endTime=${endTime}&eventTypeId=${eventTypeId}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Cal.com slots error:', errorText);
                return res.status(response.status).json({ error: 'Failed to fetch slots', details: errorText });
            }

            const data = await response.json();
            return res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching slots:', error);
            return res.status(500).json({ error: 'Internal server error', message: error.message });
        }
    }

    // POST create booking
    if (req.method === 'POST' && req.query.action === 'book') {
        try {
            const { eventTypeId, start, name, email, phone, timeZone, estimateRange } = req.body;

            if (!eventTypeId || !start || !name || !email) {
                return res.status(400).json({ error: 'Missing required fields: eventTypeId, start, name, email' });
            }

            const bookingData = {
                eventTypeId: parseInt(eventTypeId),
                start,
                responses: {
                    name,
                    email,
                    ...(phone && { phone }),
                    notes: estimateRange ? `Project Estimate: ${estimateRange}\nRequested via website chatbot` : 'Requested via website chatbot'
                },
                timeZone: timeZone || 'America/New_York',
                language: 'en',
                metadata: {
                    source: 'website_chatbot',
                    estimateRange
                }
            };

            const url = `https://api.cal.com/v1/bookings?apiKey=${CAL_API_KEY}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Cal.com booking error:', errorText);
                return res.status(response.status).json({ error: 'Failed to create booking', details: errorText });
            }

            const data = await response.json();
            return res.status(200).json(data);
        } catch (error) {
            console.error('Error creating booking:', error);
            return res.status(500).json({ error: 'Internal server error', message: error.message });
        }
    }

    return res.status(400).json({ error: 'Invalid request. Use ?action=slots or ?action=book' });
}
