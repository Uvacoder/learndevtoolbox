// @ts-ignore
import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import { learn } from "./config/sidebars/Learn";
import { archive } from "./config/sidebars/Archive";
import { pwa } from "./config/PWA";
import { heads } from "./config/Heads";

export default withPwa(
	defineConfig({
		base: "/learndevtoolbox/",
		title: "Learning with Developer Toolbox",
		description:
			"A place where you can find valuable knowledge about software architecture",
		markdown: { lineNumbers: true },
		lastUpdated: true,
		head: heads,
		themeConfig: {
			outline: [2, 3],
			nav: [
				{ text: "Learn", link: "/learn/" },
				{ text: "Archive", link: "/archive/" },
				{ text: "About", link: "/about/" }
			],
			socialLinks: [
				{
					icon: "github",
					link: "https://github.com/uvacoder/learndevtoolbox"
				},
				{ icon: "linkedin", link: "https://es.linkedin.com/in/alecbcampbell" }
			],
			sidebar: {
				"/learn/": learn,
				"/archive/": archive
			}
		},
		// @ts-ignore
		pwa: pwa
	})
);
