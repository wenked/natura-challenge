// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  outDir: 'build',
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,
});
