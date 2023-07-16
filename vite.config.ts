import * as path from 'node:path';
import { babel } from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		cors: true,
		open: true,
		hmr: true,
	},
	build: {
		minify: false,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			process: 'process/browser',
			zlib: 'browserify-zlib',
			util: 'util',
		},
	},
	css: {
		devSourcemap: true,
	},
	plugins: [
		react(),
		babel({
			babelrc: true,
			configFile: true,
			babelHelpers: 'bundled',
			extensions: ['.ts', '.tsx'],
		}),
		splitVendorChunkPlugin()
	],
});
