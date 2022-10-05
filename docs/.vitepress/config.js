export default {
	base: "/developer-cheat-sheet/",
	title: "Developer Cheat Sheet",
	description: "A place where you can find valuable knwoledge about softweare architecture",
	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
			{ text: "About", link: "/about/" },
			{ text: "Contact", link: "/contact/" }
		],
		sidebar: [
			{
				text: "Recurrency",
				collapsible: true,
				items: [
					{ text: "Intro", link: "/recurrency/" },
					{ text: "Patterns", link: "/recurrency/patterns/" },
					{ text: "Knowledge", link: "/recurrency/knowledge.md" }
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
