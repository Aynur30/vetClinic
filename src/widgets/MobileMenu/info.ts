import { anchorPoints } from "../../shared/Anchor/anchorPoints";

export interface MobileMenuProps {
  isMoblieMenuShown: boolean;
  isHaveToken: string;
  linksInfo: ILinksInfo[];
  close: Function;
  setActive: Function;
  isActive: number;
}

interface ILinksInfo {
  id: number;
  to: string;
  text: string;
  role: string;
}

export const authButtonInfo = {
  styleBtn: {
    padding: "6px 10px",
    backgroundColor: "#5496D4",
    color: "#FEFEFE",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    fontSize: "11px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  text: "Авторизация",
};

export const linksInfo: ILinksInfo[] = [
  {
    id: 1,
    to: `#${anchorPoints.doctors}`,
    text: "Список докторов",
    role: "",
  },
  {
    id: 2,
    to: `#${anchorPoints.procedures}`,
    text: "Список процедур",
    role: "",
  },
  {
    id: 3,
    to: `#${anchorPoints.price}`,
    text: "Прайс",
    role: "",
  },
  {
    id: 4,
    to: `#${anchorPoints.fact}`,
    text: "Полезно знать",
    role: "",
  },
  {
    id: 5,
    to: `#${anchorPoints.news}`,
    text: "Новости",
    role: "",
  },
  {
    id: 6,
    to: `#${anchorPoints.contacts}`,
    text: "Контакты",
    role: "",
  },
  {
    id: 7,
    to: `#${anchorPoints.about}`,
    text: "О нас",
    role: "",
  },
  {
    id: 8,
    to: "forum",
    text: "Форум",
    role: "",
  },
];
