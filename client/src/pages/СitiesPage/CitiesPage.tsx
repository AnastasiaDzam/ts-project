import ListCities from "../../entities/Cities/ui/ListCity";
import './CityPage.css';

import React, { useState } from 'react';
import axios from 'axios';

function CityPage(): JSX.Element {
  const AllCities: Array<string> = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Нижний Новгород",
    "Казань",
    "Челябинск",
    "Омск",
    "Самара",
    "Ростов-на-Дону",
    "Уфа",
    "Красноярск",
    "Воронеж",
    "Пермь",
    "Волгоград",
    "Краснодар",
    "Саратов",
    "Тюмень",
    "Тольятти",
    "Ижевск",
    "Барнаул",
    "Ульяновск",
    "Иркутск",
    "Владивосток",
    "Ярославль",
    "Хабаровск",
    "Махачкала",
    "Томск",
    "Оренбург",
    "Киров",
    "Новокузнецк",
    "Рязань",
    "Астрахань",
    "Набережные Челны",
    "Пенза",
    "Липецк",
    "Тула",
    "Кемерово",
    "Калининград",
    "Брянск",
    "Иваново",
    "Магнитогорск",
    "Сочи",
    "Ставрополь",
    "Курск",
    "Белгород",
    "Владимир",
    "Сургут",
    "Череповец",
    "Вологда",
    "Смоленск",
    "Тамбов",
    "Кострома",
    "Орёл",
    "Волгодонск",
    "Сахалин",
    "Мурманск",
    "Петрозаводск",
    "Сыктывкар",
    "Комсомольск-на-Амуре",
    "Находка",
    "Великий Новгород",
    "Архангельск",
    "Нижний Тагил",
    "Грозный",
    "Якутск",
    "Благовещенск",
    "Петропавловск-Камчатский",
    "Анапа",
    "Геленджик",
    "Норильск",
    "Севастополь",
    "Симферополь",
    "Ялта",
    "Евпатория",
    "Судак",
    "Феодосия",
    "Алушта",
    "Джанкой",
    "Керчь",
    "Балаклава",
    "Инкерман",
    "Форос",
    "Алупка",
    "Гурзуф",
    "Михайловка",
    "Партенит",
    "Кореиз",
    "Ливадия",
    "Массандра",
    "Ореанда",
    "Ботаническое",
    "Ласпи",
    "Азов",
    "Батайск",
    "Белая Калитва",
    "Волгодонск",
    "Гуково",
    "Донецк",
    "Зверево",
    "Каменск-Шахтинский",
    "Новочеркасск",
    "Новошахтинск",
    "Сальск",
    "Таганрог",
    "Шахты",
    "Элиста",
    "Йошкар-Ола",
    "Саранск",
    "Чебоксары",
    "Казань",
    "Ульяновск",
    "Самара",
    "Тольятти",
    "Сызрань"
  ];

  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setSelectedCity(city);
    fetchWeatherData(city);
  };

  const fetchWeatherData = async (city: string) => {
    const weatherApi = '0381e7ef436142e897f131107242211';
    const url = `https://api.weatherapi.com/v1/current.json?key=${weatherApi}&q=${city}&lang=ru`;

    await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных о погоде:', error);
      });
  };

  return (
    <div className="city-page">
      <h2 className="heading">Выберите город:</h2>
      <select className="city-select" name="cities" id="cities" onChange={handleCityChange}>
        <option value="">Клик!</option>
        {AllCities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      {selectedCity && (
        <div className="weather-info">
          <h3 className="subheading">Погода в городе {selectedCity}:</h3>
          {weatherData ? (
            <div className="weather-details">
              <p>Температура: {weatherData.current.temp_c}°C</p>
              <p>Описание: {weatherData.current.condition.text}</p>
              <p>Ветер: {weatherData.current.wind_kph} м/с</p>
            </div>
          ) : (
            <p className="loading-text">Загрузка данных...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CityPage;