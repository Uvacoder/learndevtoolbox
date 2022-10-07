import { defineConfig } from "vitepress";

export default defineConfig({
	base: "/developer-cheat-sheet/",
	title: "Developer Cheat Sheet",
	description:
		"A place where you can find valuable knowledge about software architecture",
	markdown: { lineNumbers: true },
	lastUpdated: true,
	head: [
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/assets/favicons/apple-touch-icon.png"
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/assets/favicons/favicon-32x32.png"
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/assets/favicons/favicon-16x16.png"
			}
		],
		["link", { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
		// ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
		["link", { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }]
		// ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
		// ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
		// ['meta', { name: "theme-color", content: "#ffffff"}],
	],
	themeConfig: {
		logo: "/assets/test-icons/code-32x32.png",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Learn", link: "/learn/" },
			{ text: "Glossary", link: "/glossary/" },
			{ text: "About", link: "/about/" }
		],
		socialLinks: [
			{ icon: "github", link: "https://github.com/colasin16" },
			{ icon: "linkedin", link: "https://es.linkedin.com/in/jordicolas" }
		],
		sidebar: {
			"/learn/": [
				{
					text: "Recurrence",
					collapsible: true,
					items: [
						{ text: "Introduction", link: "/learn/recurrence/" },
						{ text: "Patterns", link: "/learn/recurrence/patterns/" },
						{ text: "Knowledge", link: "/learn/recurrence/knowledge/" }
					]
				},
				{
					text: "Programing - OOP",
					collapsible: true,
					items: [{ text: "Introduction", link: "/learn/oop/" }]
				},
				{
					text: "Object Oriented Design",
					collapsible: true,
					items: [{ text: "Introduction", link: "/learn/ood/" }]
				},
				{
					text: "Patterns",
					collapsible: true,
					items: [{ text: "Introduction", link: "/learn/patterns/" }]
				},
				{
					text: "Software Architecture",
					collapsible: true,
					items: [{ text: "Introduction", link: "/learn/software-architecture/" }]
				},
				{
					text: "Unified Process",
					collapsible: true,
					items: [{ text: "Introduction", link: "/learn/unified-process/" }]
				},
				{
					text: "Agile",
					collapsible: true,
					items: [{ text: "Introduction", link: "/learn/agile/" }]
				}
			],
			"/glossary/": [
				{
					text: "Code smells",
					collapsible: true,
					items: [
						{
							text: "Primitive obsession",
							link: "/glossary/code-smells/primitive-obsession/"
						}
					]
				},
				{
					text: "Patterns",
					collapsible: true,
					items: [
						{ text: "Criteria", link: "/glossary/patterns/criteria/" },
						{ text: "Visitor", link: "/glossary/patterns/visitor/" }
					]
				},
				{
					text: "Refactoring",
					collapsible: true,
					items: []
				}
			]
		}
	}
});
