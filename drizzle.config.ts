import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: ["./server/db/schemas/*.schema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
