import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isVercel = !!process.env.VERCEL;
  const base = isVercel ? "/" : "/Test-dental-mercado/";
  const outDir = isVercel ? "dist" : "docs";

  return {
    base,

    build: {
      outDir,
    },

    plugins: [
      react(),
      mode === "development" && componentTagger()
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});