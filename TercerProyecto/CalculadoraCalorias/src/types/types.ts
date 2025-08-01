export type Category = {
  id: number;
  name: string;
};

export type Activity = {
  id: string;
  category: number;
  element: string;
  calories: number | '';
};