import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "./",
  build: {
    target: "es2022",
    sourcemap: true,
    chunkSizeWarningLimit: 900,
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
