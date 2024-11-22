const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const serverConfig = (app) => {
  // погран. служба / парсит тело из формы
  app.use(express.urlencoded({ extended: true }));

  // CORS
  app.use(
    cors({
      origin: ["http://localhost:5173", ],
      optionsSuccessStatus: 200,
      credentials: true
    })
  );

  // погран. служба регистрации / парсит JSON
  app.use(express.json());

  // "служба" фиксации логов
  app.use(morgan("dev"));

  // печеньки!!!!
  app.use(cookieParser());

  // настройка статики, папка public ассоциирована с маршрутом запроса
  app.use(express.static("public"));
};

module.exports = serverConfig;
