const { rule } = use("Validator");

class StoreUser {
  get rules() {
    return {
      name: [rule("required")],
      email: [rule("required"), rule("email")],
      gender: [rule("required")],
      born_date: [rule("required")]
    };
  }
}

module.exports = StoreUser;
