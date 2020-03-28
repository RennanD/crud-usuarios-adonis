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

    const avatar = request.file("avatar", {
      types: ["image"],
      size: ["3mb"]
    });

    if (avatar) {
      await avatar.move(Helpers.tmpPath("uploads"), {
        name: `${new Date().getTime()}.${avatar.subtype}`
      });

      if (!avatar.moved()) {
        return avatar.error();
      }
    }

    const userExists = await User.findBy("email", body.email);

    if (userExists) {
      return response.status(400).json({ error: "User already exists" });
    }

    const data = {
      ...body,
      avatar: avatar ? avatar.fileName : ""
    };

    const user = await User.create(data);

    return response.status(201).json(user);
  }

  async update({ request, params }) {
    const data = request.only(["name", "email", "gender", "born_date"]);

    const user = await User.find(params.id);

    if (!user) {
      return response.status(400).json({ error: "user not found" });
    }

    const avatar = request.file("avatar", {
      types: ["image"],
      size: ["3mb"]
    });

    if (avatar) {
      await avatar.move(Helpers.tmpPath("uploads"), {
        name: `${new Date().getTime()}.${avatar.subtype}`
      });

      if (!avatar.moved()) {
        return avatar.error();
      }

      user.avatar = avatar;
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
