import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts"],
	outDir: "build",
	splitting: false,
	sourcemap: true,
	clean: true,
});
