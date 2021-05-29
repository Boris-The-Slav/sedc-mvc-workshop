const User = require("../models/user.model");

module.exports = class UsersService {
  static async registerUser(data) {
    try {
      const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        role: data.role,
      };

      const response = await new User(user).save();

      return response;
    } catch (error) {
      throw { message: `Can't register user ${error}` };
    }
  }
  static async loginUser(credentials) {
    try {
      const user = await User.findByCredentials(
        credentials.email,
        credentials.password
      );

      return user;
    } catch (error) {
      throw { mesage: "Invalid Credentials" };
    }
  }
};
