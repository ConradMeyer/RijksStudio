import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
    artistas: [
      {

        name: "Rembrandt van Rijn",
        img: "https://lh3.googleusercontent.com/JtwH_U1vwOnXvLxkuBugS32IdIDHq4y8hgQCgXQ9--KacfKzmQOp81F_WQIogO2lQWC-nNh7mv8pc_vszFTolKIWLcc=s0",
        resume: "Rembrandt van Rijn (1606-1669) was born in Leiden, the son of a miller. After finishing Latin School, his parents enrolled him at Leiden University. Rembrandt soon dropped out and became an apprentice painter under Jacob van Swanenburch in Leiden, and later Pieter Lastman in Amsterdam. Back in Leiden, he set up as an independent artist together with Jan Lievens. At this time, Rembrandt mainly painted biblical scenes in a precise style and with vibrant colours."
      },
      {

        name: "Johannes Vermeer",
        img: "https://lh3.googleusercontent.com/XblBODYvgEPrgAwRO7aqhc6jKkXsaYsdgC673pXNwWMEQG1yx81olmf1jk1ZYl9bHUnQzZw_xIZ8nf53NudshoLSs-s=s0",
        resume: "Today Johannes Vermeer (1632-1675) is one of the most celebrated Dutch 17th century masters. Yet for centuries little importance was attached to his name. Works now known as Vermeers were attributed to other artists. It was only in the 1870s that he was rediscovered and 35 paintings identified as his. The son of a silk worker who bought and sold art, Vermeer lived and worked in Delft all his life. He may have served his apprenticeship under fellow townsman Carel Fabritius. In 1653, he joined the local artists guild, which he led at various times. Vermeer’s early paintings of historical scenes reveal the influence of the Utrecht Caravaggists. His later paintings are meticulous compositions of interiors featuring one or two figures, usually women. These are intimate genre paintings in which the subject is engaged in some everyday activity, usually in the light of a nearby window. Vermeer could render the way light plays on objects like few others. The Rijksmuseum has three domestic interiors by Vermeer and one outdoor scene: his world-famous "
      },
      {

        name: "Jan Havicksz. Steen",
        img: "https://lh3.googleusercontent.com/3JaHC_i56r9BDgUPA2U081volCQCVG4mZxjGQHBAkbi1H6o74A_BHmB84-Dr95GoStPE7FrRz9zO1DXIDlCKv9GRV68=s0",
        resume: "Jan Havickszoon Steen (c. 1626 – buried 3 February 1679) was a Dutch Golden Age painter, one of the leading genre painters of the 17th century. His works are known for their psychological insight, sense of humour and abundance of colour. Steen was prolific, producing about 800 paintings, of which roughly 350 survive. His work was valued much by contemporaries and as a result he was reasonably well paid for his work. He did not have many students—only Richard Brakenburgh is recorded but his work proved a source of inspiration for many painters."
      },
    ]

  },
  mutations: {
    saveFav(state, payload) {
      state.favorites.push(payload)
      localStorage.setItem('Favorites', JSON.stringify(state.favorites))
    },
    deleteFav(state, payload) {
      console.log(payload);
      state.favorites = state.favorites.filter(item => item.artObject.id !== payload)
      console.log(state.favorites);
      localStorage.setItem('Favorites', JSON.stringify(state.favorites))
  },
    getFav(state, payload) {
      state.favorites = payload
    }
  },
  actions: {
    saveFav({commit}, favorite) {
      commit("saveFav", favorite)
    },
    deleteFav({commit}, id) {
      commit("deleteFav", id)
    },
    getFav({ commit }) {
      if (localStorage.getItem('Favorites')) {
          commit("getFav", JSON.parse(localStorage.getItem('Favorites')))
          return
      }
      localStorage.setItem('Favorites', JSON.stringify([]))
  }
  },
  modules: {
  }
})
