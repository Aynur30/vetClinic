
interface PetsData {
  id: number,
  name: string,
  avatar?: string | null,
  birthDay?: string,
  petType?: string
}

export interface PetsCollapseProps {
  data: PetsData[]
}
