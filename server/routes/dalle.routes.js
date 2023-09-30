import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// In-memory storage for request counts by IP address
const requestCounts = new Map();
const RATE_LIMIT = 2; // Maximum allowed requests per IP

// Middleware function to check rate limit
function rateLimitMiddleware(req, res, next) {
  const clientIp = req.ip; // Get the client's IP address

  // Check if the IP address has exceeded the rate limit
  const requestCount = requestCounts.get(clientIp) || 0;
  if (requestCount >= RATE_LIMIT) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  next(); // Allow the request to continue if rate limit is not exceeded
}

// Apply the rate limit middleware to the image generation route
router.route('/').post(rateLimitMiddleware, async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = response.data[0].b64_json;

    // Increment the request count for this IP address
    const clientIp = req.ip;
    const requestCount = requestCounts.get(clientIp) || 0;
    requestCounts.set(clientIp, requestCount + 1);

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something wrong!' });
  }
});

export default router;
