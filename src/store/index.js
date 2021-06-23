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
      {

        name: "Joachim Bueckelaer",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Joachim_Bueckelaer_-_Kitchen_Piece%2C_with_Jesus_in_the_House_of_Martha_and_Mary_in_the_background.jpg/465px-Joachim_Bueckelaer_-_Kitchen_Piece%2C_with_Jesus_in_the_House_of_Martha_and_Mary_in_the_background.jpg",
        resume: "Joachim Beuckelaer (c. 1533 – c. 1570/4) was a Flemish painter specialising in market and kitchen scenes with elaborate displays of food and household equipment. He also painted still lifes with no figures in the central scene.[1] His development of the genre of market and kitchen scenes was influential on the development of still life art in Northern Europe as well as Italy. Beuckelaer specialised in market and kitchen scenes with elaborate displays of food and household equipment. During the 1560s, especially during the early part of the decade, Beuckelaer painted some purely religious works, for which, unlike the kitchen and market scenes, drawings are known. In this period he also made designs for stained glass"
      },
      {

        name: "Paul Joseph Constantin Gabriël",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Therese_Schwartze_-_Paul_Joseph_Constantin_Gabri%C3%ABl.jpg/330px-Therese_Schwartze_-_Paul_Joseph_Constantin_Gabri%C3%ABl.jpg",
        resume: "Paul Joseph Constantin Gabriël or Paul Gabriël (5 July 1828 – 23 August 1903) was a painter, draftsman, watercolorist, and etcher who belonged to the Hague School. Gabriël was born in Amsterdam, the son of the sculptor and painter, Paul Joseph Gabriël. From 1840 until 1843 he was educated at the State Academy of Fine Arts in Amsterdam, where he was a pupil of Louis Zocher. The following year he went to the German town of Cleves, where Barend Cornelis Koekkoek had founded a drawing academy. Later he returned to the Netherlands and studied with Cornelis Lieste in Haarlem. Here he became acquainted with Anton Mauve, with whom he was to work with often."
      },
      {

        name: "Lucas van Leyden",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Self-portrait%2C_by_Lucas_van_Leyden.jpg/330px-Self-portrait%2C_by_Lucas_van_Leyden.jpg",
        resume: "Lucas van Leyden (1494 – 8 August 1533), also named either Lucas Hugensz or Lucas Jacobsz, was a Dutch painter and printmaker in engraving and woodcut. Lucas van Leyden was among the first Dutch exponents of genre painting and was a very accomplished engraver. Carel van Mander characterizes Lucas as a tireless artist, who as a child annoyed his mother by working long hours after nightfall, which she forbade not only for the cost of candlelight, but also because she felt that too much study was bad for his sensibilities. According to Van Mander, as a boy he only consorted with other young artists, such as painters, glass-etchers and goldsmiths, and was paid by the Heer van Lochorst (Johan van Lockhorst of Leiden, who died in 1510) a golden florin for each of his years at age 12 for a watercolor of St. Hubert."
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
    }
  },
  modules: {
  }
})
