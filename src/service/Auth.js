import $api from "../http";

export default class Auth {
  static async login(email, password) {
    return $api.post("/login", {email, password})
  }

  static async register(username, email, password) {
    return $api.post("/register", {username, email, password})
  }

  static async logout() {
    return $api.post("/logout")
  }

  static async editData(user, username, email) {
    return $api.post("/edit/data", {user, username, email})
  }
}