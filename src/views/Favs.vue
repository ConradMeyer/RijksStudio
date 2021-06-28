<template>
  <div class="favorites">
    <h1 data-testid="test-favorites">FAVORITES PAINTINGS</h1>
    <Search v-if="favs.length > 0" @handleSearch="handleSearch" />
    <div class="no-res" v-if="this.favorites.length === 0">
      <h3>
        You don't have any favorites saved yet. 😍 <br />
        Let´s try to save some of our amazing painting. <br />
        👇
      </h3>
      <router-link class="collect" to="/collections">COLLECTIONS</router-link>
    </div>

    <div v-else class="result">
      <div class="obras" v-for="(item, index) in this.filter" :key="index">
        <router-link :to="`/paint/${item.artObjectPage.objectNumber}`">
          <img :src="item.artObject.webImage.url" alt="" />
          <h3>
            {{ item.artObject.title }}
          </h3>
          <p class="long-title">{{ item.artObject.longTitle }}</p>
        </router-link>
        <button @click="deleteFavorite(item.artObject.id)">REMOVE</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Search from "../components/Search.vue";

export default {
  name: "Favorites",
  data() {
    return {
      favs: [],
      filter: []
    };
  },
  components: {
    Search,
  },
  computed: {
    ...mapState(["favorites", "filter"]),
  },
  methods: {
    ...mapActions(["getFav", "deleteFav"]),
    setFavs() {
      this.favs = this.favorites;
      this.filter = this.favorites
    },
    handleSearch(data) {
      this.filter = this.favs.filter(el => el.artObject.title.toLowerCase().includes(data) || el.artObject.principalMaker.toLowerCase().includes(data))
    },
    async deleteFavorite(id) {
      await this.deleteFav(id)
      this.setFavs()
    }
  },
  created() {
    this.getFav();
    this.setFavs();
  },
};
</script>

<style scoped>
div.favorites {
  background-color: rgba(0, 0, 0, 0.884);
  min-height: 40vh;
}
h1 {
  text-align: center;
  color: white;
  background-color: rgb(182, 50, 50);
  padding: 20px;
  border-bottom: 1px solid white;
}
div.no-res {
  text-align: center;
}
h3 {
  color: white;
  text-align: center;
  margin: 20px auto;
}
a.collect {
  color: white;
  text-decoration: none;
  background-color: rgb(182, 50, 50);
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}
.collect:hover {
  cursor: pointer;
  background-color: rgb(204, 70, 70);
  transform: scale(1.02);
}
div.result {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}
div.obras {
  margin: 10px;
  padding: 20px;
  width: 500px;
}
img {
  width: 500px;
}
div.obras h3,
a {
  color: white;
  text-decoration: none;
}
div.obras p {
  color: grey;
}
button {
  color: white;
  width: 100px;
  margin: 10px auto;
  font-weight: bold;
  text-decoration: none;
  border: none;
  background-color: rgb(182, 50, 50);
  padding: 10px;
  border-radius: 5px;
}
button:hover {
  cursor: pointer;
  background-color: rgb(204, 70, 70);
  transform: scale(1.02);
}
</style>