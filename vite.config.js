import path from "path";
import { defineConfig, transformWithEsbuild } from "vite";
import svgr from "vite-plugin-svgr"; // very usefull package, if you are dealing with SVGs, kindly checkout the docs
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
  ],
  build: {
    outDir: 'build', // Specify the output directory
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase chunk size limit
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@graphql": path.resolve(__dirname, "src/graphql"),
      "@store": path.resolve(__dirname, "src/store"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@style": path.resolve(__dirname, "src/style"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@context": path.resolve(__dirname, "src/context"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
