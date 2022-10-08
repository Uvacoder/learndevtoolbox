import { DefaultTheme } from "vitepress";

export const archive: DefaultTheme.SidebarGroup[] = [
	{
		text: "Concept definitions",
		collapsible: true,
		items: [
			{
				text: "Abstraction",
				link: "/archive/concepts-definitions/abstraction/"
			},
			{
				text: "Encapsulation",
				link: "/archive/concepts-definitions/encapsulation/"
			}
		]
	},
	{
		text: "Code smells",
		collapsible: true,
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
		items: [
			{ text: "Criteria", link: "/archive/patterns/criteria/" },
			{ text: "Visitor", link: "/archive/patterns/visitor/" }
		]
	},
	{
		text: "Refactoring",
		collapsible: true,
		items: []
	}
];
