import burger from "../../assets/icons/button-burger.svg";
import account from "../../assets/icons/account-button.svg";
import { anchorPoints } from "../../shared/Anchor/anchorPoints";

interface ILinksInfo {
  id: number;
  to: string;
  text: string;
  role: string;
}

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

export const signInButtonStyle = {
  width: `88px`,
  backgroundColor: "#1676f3",
  color: "#FFFFFF",
  padding: "10px 25px",
  borderRadius: "5px",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "16px",
};

export const registerButtonStyle = {
  width: `88px`,
  backgroundColor: "#FFFFFF",
  color: "#656a6e",
  border: "solid 1px #656a6e",
  padding: "10px 20px",
  borderRadius: "5px",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "16px",
};

export const profileButtonStyle = {
  width: `88px`,
  backgroundColor: "#1676f3",
  color: "#FFFFFF",
  padding: "0 25px",
  borderRadius: "15px",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "16px",
};

export const accountButtonStyle = {
  padding: "7px 10px",
  paddingLeft: "30px",
  backgroundImage: `url("${account}")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "10%",
  color: "#FEFEFE",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontSize: "11px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  backgroundColor: "#2E75B7",
};

export const burgerButtonStyle = {
  padding: "13px 0px",
  width: "16px",
  height: "16px",
  backgroundImage: `url("${burger}")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export const signInButtonText = "Sign in";
export const registerButtonText = "Register";
export const profileButtonText = "Profile";
export const accountButtonText = `Аккаунт`;
