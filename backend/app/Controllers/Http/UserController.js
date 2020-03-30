"use strict";

const Helpers = use("Helpers");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

class UserController {
  async index() {
    const users = await User.query().fetch();

    return users;
  }

  async show({ response, params }) {
    const user = await User.find(params.id);

    if (!user) {
      return response.status(400).json({ error: "user not found" });
    }

    return user;
  }

  async store({ request, response }) {
    const body = request.all();

    const userExists = await User.findBy("email", body.email);

    if (userExists) {
      return response.status(400).json({ error: "User already exists" });
    }

    const user = await User.create(body);

    return response.status(201).json(user);
  }

  async update({ request, params, response }) {
    const data = request.only(["name", "email", "gender", "born_date"]);

    const user = await User.find(params.id);

    if (!user) {
      return response.status(400).json({ error: "user not found" });
    }

    user.merge(data);

    await user.save();

    return user;
  }

  async destroy({ params, response }) {
    const user = await User.find(params.id);

    if (!user) {
      return response.status(400).json({ error: "user not found" });
    }

    await user.delete();
  }
}

module.exports = UserController;
