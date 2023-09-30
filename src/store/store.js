import { makeAutoObservable } from 'mobx'
import Auth from '../service/Auth'
import axios from 'axios'
import { API_URL } from '../http'

export default class Store {
  user = {}
  isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool) {
    this.isAuth = bool
  }

  setUser(user) {
    this.user = user
  }

  async login(email, password) {
    try {
      const res = await Auth.login(email, password)
      console.log(res);
      localStorage.setItem("token", res.data.accessToken)
      console.log(localStorage.getItem("token"));
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async register(email, password) {
    try {
      const res = await Auth.register(email, password)
      console.log(res);
      localStorage.setItem("token", res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const res = await Auth.logout()
      console.log(res);
      localStorage.removeItem("token")
      this.setAuth(false)
      this.setUser({})
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      const res = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
      console.log(res);
      localStorage.setItem("token", res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}