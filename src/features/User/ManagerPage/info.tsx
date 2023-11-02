interface IPanelLinksInfo {
  id: number;
  to: string;
  text: string;
}

export const panelLinksInfo: IPanelLinksInfo[] = [
  {
    id: 1,
    to: "category",
    text: "Категории",
  },
  {
    id: 2,
    to: "news",
    text: "Новости",
  },
  {
    id: 3,
    to: "medicines",
    text: "Лекарства",
  },
];
