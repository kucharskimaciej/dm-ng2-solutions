export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  promoted?: boolean;
  tags?: string[];
}
