import { PwaOptions } from "@vite-pwa/vitepress";

export const pwa: PwaOptions = {
	outDir: ".vitepress/dist",
	base: "/developer-toolbox/",
	scope: "/developer-toolbox/",
	registerType: "autoUpdate",
	includeManifestIcons: false,
	manifest: {
		id: "/developer-toolbox/",
		name: "Developer Toolbox PWA",
		short_name: "DevToolbox",
		description:
			"A place where you can find valuable knowledge about software architecture",
		theme_color: "#ffffff",
		icons: [
			{
				src: "/assets/favicons/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png"
			},
			{
				src: "/assets/favicons/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png"
			}
		]
	},
	workbox: {
		globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
		runtimeCaching: [
			{
				urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
				handler: "CacheFirst",
				options: {
					cacheName: "google-fonts-cache",
					expiration: {
						maxEntries: 10,
						maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			},
			{
				urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
				handler: "CacheFirst",
				options: {
					cacheName: "gstatic-fonts-cache",
					expiration: {
						maxEntries: 10,
						maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			},
			{
				urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
				handler: "NetworkFirst",
				options: {
					cacheName: "jsdelivr-images-cache",
					expiration: {
						maxEntries: 10,
						maxAgeSeconds: 60 * 60 * 24 * 7 // <== 7 days
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}
		]
	}
};
