<template>
  <div class="paint">
    <h1>
      {{ this.data.artObject.title }} - {{ this.data.artObject.principalMaker }}
    </h1>
    <div class="info">
      <img :src="this.data.artObject.webImage.url" alt="" />
      <div class="data">
        <h2>{{ this.data.artObject.longTitle }}</h2>
        <h3>Description</h3>
        <div v-if="this.data.artObject.plaqueDescriptionEnglish">
          <p>{{ this.data.artObject.plaqueDescriptionEnglish }}</p>
          <br />
          <p>{{ this.data.artObject.label.description }}</p>
        </div>
        <div v-else>
          <p>{{ this.data.artObject.description }}</p>
        </div>
        <h3 v-if="this.data.artObject.colors.length > 0">Palete Colors</h3>
        <div class="colors">
          <div v-for="(item, index) in this.data.artObject.colors" :key="index">
            <div class="color" :style="`background-color: ${item.hex}`"></div>
          </div>
        </div>
        <div v-if="checkFav" class="no-like">
          <img
            @click="deleteFav(data.artObject.id)"
            class="like"
            src="../assets/like.svg"
            alt="no-like"
          />
          <h4>Delete this picture from favorite</h4>
        </div>
        <div v-else class="no-like">
          <img
            @click="saveFav(data)"
            class="like"
            src="../assets/no-like.svg"
            alt="no-like"
          />
          <h4>Save this picture as favorite</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Paint",
  data() {
    return {
      data: {},
    };
  },
  computed: {
    ...mapState(["favorites"]),
    checkFav() {
      return this.favorites.find(
        (item) => item.artObject.id === this.data.artObject.id
      );
    },
  },
  methods: {
    ...mapActions(["saveFav", "getFav", "deleteFav"]),
    async call() {
      const res = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection/${this.$route.params.id}?key=2pgrS0Oq`
      );
      const data = await res.json();
      this.data = data;
    },
  },
  created() {
    this.call();
  },
};
</script>

<style scoped>
h1 {
  background: black;
  color: white;
  padding: 30px;
}
img {
  width: 600px;
}
div.info {
  display: flex;
}
div.data {
  padding: 20px;
}
h3 {
  margin: 20px auto;
  text-decoration: underline;
}
p {
  line-height: 1.5;
  font-size: 1.1rem;
}
div.colors {
  display: flex;
  flex-wrap: wrap;
}
div.color {
  width: 100px;
  height: 50px;
  margin: 1px;
}
img.like {
  width: 30px;
  margin-right: 10px;
}
img.like:hover {
  cursor: pointer;
  transform: scale(1.05);
}
div.no-like {
  margin-top: 40px;
  display: flex;
  align-items: center;
}
</style>