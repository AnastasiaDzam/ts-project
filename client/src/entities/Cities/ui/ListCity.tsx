import { useEffect, useState } from "react";
import { City } from "../type/CityTypes";
import CityApi from "../api/CityApi";
import ItemCity from "./ItemCity";

function ListCities(): JSX.Element {
  const [cities, setCities] = useState<City[] | []>([]);

  useEffect(() => {
    CityApi.getCities().then((data) => {
      setCities(data);
    });
  }, []);

  return (
    <div>
      {cities.map((city) => (
        <ItemCity city={city} setCities={setCities} />
      ))}
    </div>
  );
}

export default ListCities;
