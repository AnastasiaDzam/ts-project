import { Dispatch, SetStateAction } from "react";
import { City } from "../type/CityTypes";
import CityApi from "../api/CityApi";

type propsCities = {
  city: City;
  setCities: Dispatch<SetStateAction<City[] | []>>;
};

function ItemCity({ city, setCities }: propsCities): JSX.Element {
  const onDeleteHandler = async (id: number): Promise<void> => {
    const isDeleted = await CityApi.deleteCity(id);
    if (isDeleted) {
      setCities((prev) => prev.filter((el) => el.id !== id));
    } else {
      alert("Fail");
    }
  };

  return (
    <div>
      <h2>{city.name}</h2>
      <p>{city.weather}</p>
      <button type="button" onClick={() => onDeleteHandler(city.id)}>
        {" "}
        Удалить
      </button>
    </div>
  );
}

export default ItemCity;
