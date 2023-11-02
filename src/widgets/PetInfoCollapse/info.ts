export interface PetDesc {
  label: string;
  value: string;
}

export interface PetItem {
  name: string;
  description: PetDesc[];
}

export interface PetInfoCollapseProps {
  data: PetItem[];
}
