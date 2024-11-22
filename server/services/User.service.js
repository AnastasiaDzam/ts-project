const { User } = require("../db/models");
const { Op } = require("sequelize");

class UserService {
  static async createUser({ name, email, password}) {
    try {
      const newUser = await User.create({ name, email, password})
      return newUser ? newUser.get() : null // newUser.get() убирает мета данные, которые прилетают с запросом
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getUserByEmail( email ) {
    try {
      const user = await User.findOne({ where: { email } })
      console.log(email);
      return user ? user.get() : null 
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = UserService;
