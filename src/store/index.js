import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
    artistas: []
  },
  mutations: {
    saveFav(state, payload) {
      state.favorites.push(payload)
      localStorage.setItem('Favorites', JSON.stringify(state.favorites))
    },
    deleteFav(state, payload) {
      state.favorites = state.favorites.filter(item => item.artObject.id !== payload)
      localStorage.setItem('Favorites', JSON.stringify(state.favorites))
    },
    getFav(state, payload) {
      state.favorites = payload
    },
    getArtist(state, payload) {
      state.artistas = payload
    }
  },
  actions: {
    saveFav({ commit }, favorite) {
      commit("saveFav", favorite)
    },
    deleteFav({ commit }, id) {
      commit("deleteFav", id)
    },
    getFav({ commit }) {
      if (localStorage.getItem('Favorites')) {
        commit("getFav", JSON.parse(localStorage.getItem('Favorites')))
        return
      }
      localStorage.setItem('Favorites', JSON.stringify([]))
    },
    async getArtist({commit}) {
      const res = await fetch('http://localhost:3000/artistas')
      const data = await res.json()
      commit('getArtist', data)
    }
  },
  modules: {
  }
})
