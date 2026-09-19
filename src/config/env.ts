import dotenv from "dotenv";

dotenv.config();

function getEnv(variable: string, fallback = ""): string {
  return process.env[variable] ?? fallback;
}

const env = {
  APP_NAME: getEnv("APP_NAME", "AppsDev API Tutorial"),
  PORT: Number(getEnv("PORT", "7000")),
  NODE_ENV: getEnv("NODE_ENV", "development"),
  JWT_SECRET: getEnv("JWT_SECRET", "fallback_secret_change_me"),
  BACKEND_URL: getEnv("BACKEND_URL", "http://localhost:7000"),
  FRONTEND_URL: getEnv("FRONTEND_URL", "http://localhost:3000"),
  DATABASE_URL: getEnv("DATABASE_URL", ""),
};

export default env;