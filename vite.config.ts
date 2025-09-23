import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => ({
  server: {
    host: true, // accessible via LAN (IPv4 + IPv6)
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(), // dev-only plugin
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
