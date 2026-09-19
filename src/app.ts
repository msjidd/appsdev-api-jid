import express from "express";
import type { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import env from "@/config/env";
import healthRoutes from "@/routes/health.routes";

const app = express();

app.use(helmet());
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(hpp());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: `${env.APP_NAME} API is running`,
  });
});

app.use("/api/health", healthRoutes);

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;