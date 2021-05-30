const UsersService = require("../services/users.service");

module.exports = class UsersController {
  static async registerUser(req, res, next) {
    try {
      const createdUser = await UsersService.registerUser(req.body);
      res.status(201).json(createdUser);
    } catch (error) {
      next(error);
    }
  }
  static async loginUser(req, res, next) {
    try {
      const user = await UsersService.loginUser(req.body);

      req.session.authenticated = true;
      req.session.role = user.role;
      req.session.user = {
        fullName: `${user.firstName} ${user.lastName}`,
      };
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
  static logoutUser(req, res) {
    if (req.session.authenticated) {
      req.session.authenticated = false;
      res.status(200).json({ message: "User logged out!" });
    } else {
      res.status(400).json({ message: "No user logged in" });
    }
  }
};
