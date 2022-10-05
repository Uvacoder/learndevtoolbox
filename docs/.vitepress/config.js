export default {
	base: "/developer-cheat-sheet/",
	title: "Developer Cheat Sheet",
	description: "A place where you can find valuable knwoledge about softweare architecture",
	head: [
		["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png" }],
		["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png" }],
		["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png" }],
		["link", { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
		// ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
		["link", { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }]
		// ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
		// ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
		// ['meta', { name: "theme-color", content: "#ffffff"}],
	],
	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
			{ text: "About", link: "/about/" }
		],
		socialLinks: [{ icon: "github", link: "https://github.com/colasin16" }],
		sidebar: [
			{
				text: "Recurrence",
				collapsible: true,
				items: [
					{ text: "Intro", link: "/recurrence/" },
					{ text: "Patterns", link: "/recurrence/patterns/" },
					{ text: "Knowledge", link: "/recurrence/knowledge/" }
				]
			},
			{
				text: "Programing - OOP",
				collapsible: true,
				items: [{ text: "Intro", link: "/oop/" }]
			},
			{
				text: "Object Oriented Design",
				collapsible: true,
				items: [{ text: "Intro", link: "/ood/" }]
			},
			{
				text: "Patterns",
				collapsible: true,
				items: [{ text: "Intro", link: "/patterns/" }]
			},
			{
				text: "Software Architecture",
				collapsible: true,
				items: [{ text: "Intro", link: "/software-architecture/" }]
			},
			{
				text: "Unified Process",
				collapsible: true,
				items: [{ text: "Intro", link: "/unified-process/" }]
			},
			{
				text: "Agile",
				collapsible: true,
				items: [{ text: "Intro", link: "/agile/" }]
			}
		]
	}
};
