export enum NewsType {
  UPDATING = 'UPDATING',
  ADVERTISING_ACTIONS = 'ADVERTISING_ACTIONS',
  DISCOUNTS = 'DISCOUNTS',
  PROMOTION = 'PROMOTION',
}

export interface IClientNews {
  id: number;
  title: string;
  type: NewsType;
  content: string;
}
