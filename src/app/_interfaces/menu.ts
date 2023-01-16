export interface IMenu {
  id: number;
  label: string;
  priceDF: string;
  availableForWeeksAndDays: IValueAvailable[];
  imageId: string;
  meals: string;
  status: string;
}

export interface IMenuReduced {
  id: number;
  label: string;
  priceDF: string;
  jour: string;
}

export interface IValueAvailable {
  day: number;
  week: number;
}


