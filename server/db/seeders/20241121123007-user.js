"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John",
          email: "john@example.ru",
          password: "qwerty1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane",
          email: "jane@example.ru",
          password: "qwerty2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alice",
          email: "alice@example.ru",
          password: "qwerty3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
