const { test, trait } = use("Test/Suite")("User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Helpers = use("Helpers");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("it should be list all users", async ({ assert, client }) => {
  const data = await Factory.model("App/Models/User").make();

  const user = await User.create(data.$attributes);

  const response = await client.get("/users").end();

  response.assertStatus(200);
  assert.equal(response.body[0].name, user.name);
});

test("it should be show only user", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const response = await client.get(`/users/${user.id}`).end();

  response.assertStatus(200);
  assert.equal(response.body.name, user.name);
});

test("it shuold be create a user", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").make();

  const data = {
    ...user.$attributes,
    avatar: Helpers.tmpPath("test/avatar.jpg")
  };

  const response = await client
    .post(`/users`)
    .send(data)
    .end();

  response.assertStatus(201);

  assert.exists(response.body.avatar);
});

test("it shuold be update a user a user", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const response = await client
    .put(`users/${user.id}`)
    .field("name", "Rennan")
    .attach("avatar", Helpers.tmpPath("test/avatar.jpg"))
    .end();

  response.assertStatus(200);
  assert.equal(response.body.name, "Rennan");
  assert.exists(response.body.avatar);
});

test("it should be remove a user", async ({ client, assert }) => {
  const user = await Factory.model("App/Models/User").create();

  const response = await client.delete(`/users/${user.id}`).end();

  response.assertStatus(204);

  const userExists = await User.find(user.id);

  assert.isNull(userExists);
});
