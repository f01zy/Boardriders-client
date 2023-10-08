import { makeAutoObservable } from 'mobx'
import Auth from '../service/Auth'
import axios from 'axios'
import { API_URL } from '../http'

export default class Store {
  user = {}
  isAuth = false
  isLoaded = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool) {
    this.isAuth = bool
  }

  setUser(user) {
    this.user = user
  }

  setCards(cards) {
    this.cards = cards
  }

  async login(email, password) {
    try {
      const res = await Auth.login(email, password)
      console.log(res);
      localStorage.setItem("token", res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async register(username, email, password) {
    try {
      const res = await Auth.register(username, email, password)
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
    this.isLoaded = false
    try {
      const res = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
      console.log(res);
      localStorage.setItem("token", res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      this.isLoaded = true
    }
  }

  async get() {
    this.isLoaded = false
    try {
      const res = await axios.get(`${API_URL}/get`, {withCredentials: true})
      this.setCards(res.data)
      console.log(this.cards);
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      this.isLoaded = true
    }
  }

  async editData(user, username, email) {
    try {
      const res = await Auth.editData(user, username, email)
      console.log(res);
      this.setUser(res.data)
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async editPassword(user, password, newPassword) {
    try {
      const res = await Auth.editPassword(user, password, newPassword)
      console.log(res);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async create(title, price, weight, description) {
    try {
      const res = await Auth.create(title, price, weight, description)
      console.log(res);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}