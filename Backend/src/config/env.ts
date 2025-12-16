
import dotenv from "dotenv";

dotenv.config();

const required = [
  "PORT",
  "MONGO_URI",
  "JWT_SECRET",
  "OPENAI_API_KEY"
] as const;


for (const key of required) {
  if (!process.env[key]) {
    console.error(`❌ Missing environment variable: ${key}`);
    process.exit(1);
  }
}

export const env = {
  PORT: Number(process.env.PORT),
  MONGO_URI: process.env.MONGO_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY!
};
