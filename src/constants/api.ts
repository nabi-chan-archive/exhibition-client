export const API_PATH = process.env.NODE_ENV === "production" ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
