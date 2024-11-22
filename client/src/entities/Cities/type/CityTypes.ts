export type City = {
  id: number;
  name: string;
  weather: string;
};

export type CityWithoutId = Omit<City, "id">;
