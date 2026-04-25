// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://mcurtaz.dev",
	i18n: {
		locales: ["en", "it"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: false,
			redirectToDefaultLocale: false
		},
	},
	security: {
		allowedDomains: [
			{
				hostname: 'mcurtaz.dev',
				protocol: 'https'
			}
		]
	},
	vite: {
		plugins: [tailwindcss()]
	}
});