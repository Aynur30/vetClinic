import therapy from "../../../assets/icons/icon-therapy.svg";
import vaccination from "../../../assets/icons/icon-vaccination.svg";
import dentistry from "../../../assets/icons/icon-dentistry.svg";
import dermatology from "../../../assets/icons/icon-dermatology.svg";
import diagnostics from "../../../assets/icons/icon-diagnostics.svg";

interface IServices {
  id: number;
  serviceName: string;
  iconUrl: string;
  text?: string[];
}

export const servicesNames: Array<IServices> = [
  {
    id: 1,
    serviceName: "Терапия",
    iconUrl: therapy,
    text: [
      "- Ваш питомец заболел или его поведение вызывает у Вас тревогу",
      "- Нужна консультация по содержанию и кормлению",
      "- Подошла пора вакцинации",
    ],
  },
  {
    id: 2,
    serviceName: "Вакцинация",
    iconUrl: vaccination,
    text: [""],
  },
  {
    id: 3,
    serviceName: "Стоматология",
    iconUrl: dentistry,
    text: [""],
  },
  {
    id: 4,
    serviceName: "Дерматология",
    iconUrl: dermatology,
    text: [""],
  },
  {
    id: 5,
    serviceName: "Диагностика",
    iconUrl: diagnostics,
    text: [""],
  },
];
