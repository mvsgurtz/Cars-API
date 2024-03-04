export interface ICar {
  model: string;
  km: number;
  year: number;
  brand: string;
  price?: number;
  id: number;
  updatedAt: Date;
  createdAT: Date;
}

export type TCreateCars = Omit<ICar, "id" | "createdAt" | "updatedat">;
export type TUpdateCars = Partial<TCreateCars>;
