import { parseEnv } from "znv";
import { z } from "zod";

export const env = parseEnv(
  {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DATABASE_URL: z
      .string()
      .url()
      .default("mysql://kampus:kampus@localhost:3306/kampus?schema=public&connect_timeout=300"),
  }
);
