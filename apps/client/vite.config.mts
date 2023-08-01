import path from "node:path";

import strip from "@rollup/plugin-strip";
import react from "@vitejs/plugin-react-swc";
import ViteVisualizer from "rollup-plugin-visualizer";
import AutoImport from "unplugin-auto-import/vite";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig, loadEnv } from "vite";
import { imagetools } from "vite-imagetools";
import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
	const isDev = mode === "dev";
	const isReport = mode === "report";

	// loads environment variables from .env file and exposes them to process.env
	process.env = { ...process.env, ...loadEnv(mode, "./env") };

	const plugin = [
		react(),
		svgr({
			exportAsDefault: true,
		}),
		strip(),
		Unfonts({
			google: {
				families: ["Roboto Slab", "Raleway"],
			},
		}),
		viteCompression({
			algorithm: "brotliCompress",
			threshold: 200,
			verbose: true,
		}),
		tsconfigPaths({
			loose: true,
		}),
		imagetools(),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					title: process.env.VITE_APP_TITLE,
				},
			},
		}),
		AutoImport({
			include: [
				/\.[jt]sx?$/, // .ts, .tsx, .js, .jsx
			],
			imports: [
				"react",
				"react-router-dom",
				"react-i18next",
				{
					axios: [
						// default imports
						["default", "axios"], // import { default as axios } from 'axios',
					],
					"@tanstack/react-query": ["useQuery", "useMutation", "useIsFetching"],
				},
			],
			dts: "./src/auto-imports.d.ts",
			dirs: ["src/layouts", "src/views", "src/components"],
			eslintrc: {
				enabled: true,
			},
		}),
	];

	if (isReport) {
		plugin.push(
			/**
			 * DESC:
			 * visualize bundle
			 */
			ViteVisualizer({
				filename: "./dist/report.html",
				open: true,
				brotliSize: true,
			}),
		);
	}

	let optimizeDeps = {};

	if (isDev) {
		/**
		 * DESC:
		 * dependency pre-bundling
		 */
		optimizeDeps = {
			include: [
				"react",
				"react-router-dom",
				"zustand",
				"react-hook-form",
				"react-dom",
				"i18next-browser-languagedetector",
				"i18next",
				"@tanstack/react-query",
				"axios",
			],
		};
	}

	return {
    cacheDir: "../../node_modules/.vite/client",

    server: {
      port: 4200,
      host: "localhost",
    },

    preview: {
      port: 4300,
      host: "localhost",
    },
		resolve: {
			alias: {
				"@images": path.resolve(__dirname, "src/resources/images"),
			},
		},
		build: {
			minify: true,
			chunkSizeWarningLimit: 1024,
			sourcemap: false,
		},
		base: process.env.VITE_APP_BASE,
		plugins: plugin,
		optimizeDeps,

		// Uncomment this if you are using workers.
		// worker: {
		//  plugins: [
		//    viteTsConfigPaths({
		//      root: '../../',
		//    }),
		//  ],
		// },

		test: {
			globals: true,
			cache: {
				dir: "../../node_modules/.vitest",
			},
			environment: "jsdom",
			include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		},
		deps: {
			inline: [
				"react",
				"react-router-dom",
				"zustand",
				"react-hook-form",
				"react-dom",
				"i18next-browser-languagedetector",
				"i18next",
				"@tanstack/react-query",
				"axios",
			],
		},
	};
});
