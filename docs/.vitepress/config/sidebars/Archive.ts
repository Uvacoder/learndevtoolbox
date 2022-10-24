import { DefaultTheme } from "vitepress/types";

export const archive: DefaultTheme.SidebarGroup[] = [
	{
		text: "Concept definitions",
		collapsible: true,
		collapsed: true,
		items: [
			{
				text: "Abstraction",
				link: "/archive/concepts-definitions/abstraction/"
			},
			{
				text: "Encapsulation",
				link: "/archive/concepts-definitions/encapsulation/"
			},
			{
				text: "Domain model",
				link: "/archive/concepts-definitions/domain-model/"
			},
			{
				text: "Hierarchy",
				link: "/archive/concepts-definitions/hierarchy/"
			}
		]
	},
	{
		text: "Code smells",
		collapsible: true,
		collapsed: true,
		items: [
			{
				text: "Primitive obsession",
				link: "/archive/code-smells/primitive-obsession/"
			}
		]
	},
	{
		text: "Patterns",
		collapsible: true,
		collapsed: true,
		items: [{ text: "Criteria", link: "/archive/patterns/criteria/" }]
	},
	{
		text: "Refactoring",
		collapsible: true,
		collapsed: true,
		items: []
	}
];
