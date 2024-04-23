import { defineConfig } from 'vitest/config';
import path from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@lib': path.resolve(__dirname, './src/lib/'),
    },
  }
})
