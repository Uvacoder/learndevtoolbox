import { DefaultTheme } from "vitepress";

export const learn: DefaultTheme.SidebarGroup[] = [
	{
		text: "Recurrence",
		collapsible: true,
		collapsed: true,
		items: [
			{ text: "Introduction", link: "/learn/recurrence/" },
			{ text: "Patterns", link: "/learn/recurrence/patterns/" },
			{ text: "Knowledge", link: "/learn/recurrence/knowledge/" }
		]
	},
	{
		text: "Programing - OOP",
		collapsible: true,
		collapsed: true,
		items: [{ text: "Introduction", link: "/learn/oop/" }]
	},
	{
		text: "Object Oriented Design",
		collapsible: true,
		collapsed: true,
		items: [{ text: "Introduction", link: "/learn/ood/" }]
	},
	{
		text: "Patterns",
		collapsible: true,
		collapsed: true,
		items: [{ text: "Introduction", link: "/learn/patterns/" }]
	},
	{
		text: "Software Architecture",
		collapsible: true,
		collapsed: true,
		items: [{ text: "Introduction", link: "/learn/software-architecture/" }]
	},
	{
		text: "Testing",
		collapsible: true,
		collapsed: true,
		items: [{ text: "Introduction", link: "/learn/testing/" }]
	},
	{
		text: "Unified Process",
		collapsible: true,
		collapsed: true,
		items: [{ text: "Introduction", link: "/learn/unified-process/" }]
	},
	{
		text: "Agile",
		collapsible: true,
		collapsed: true,
		items: [{ text: "Introduction", link: "/learn/agile/" }]
	}
];
