import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Conditionally import Nitro to support both offline local dev and Vercel builds
let nitroPlugin: any = null;
try {
  const { nitro } = await import("nitro/vite");
  nitroPlugin = nitro();
} catch (e) {
  console.log("Nitro plugin not found locally, skipping for local development.");
}

export default defineConfig({
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    ...(nitroPlugin ? [nitroPlugin] : []),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
