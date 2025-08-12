import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

// const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });
const model = new GoogleGenAI({}); //no need to pass apikey because standard environment variable GOOGLE_API_KEY is set in .env file

