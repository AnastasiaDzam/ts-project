import { axiosInstance } from "../../../shared/lib/axiosInstance";
import { City } from "../type/CityTypes";

class CityApi {
  static async getCities(): Promise<City[] | []> {
    try {
      const response = await axiosInstance.get<{ cities: City[] }>("/cities");
      if (response.status === 200) {
        return response.data.cities;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async deleteCity(id: number): Promise<boolean> {
    try {
      const response = await axiosInstance.delete(`/cities/${id}`);
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}

export default CityApi;
