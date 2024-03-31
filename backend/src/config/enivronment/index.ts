import { config } from 'dotenv';
config();

export const {
  PORT,
  APP_URL,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  JWT_SECRET,
} = process.env;
