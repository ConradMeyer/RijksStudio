<template>
  <div class="artist">
    <h1>{{ $route.params.id }}</h1>
    <p class="resume">{{ data }}</p>
    <h2>PAINTINGS</h2>
    <div v-if="artist === ''" class="loader">
      <img src="../assets/spinner2.gif" id="gif" />
    </div>
    <div class="container">
      <div class="obra" v-for="(item, index) in artist.artObjects" :key="index">
        <div v-if="item.hasImage">
          <img :src="item.webImage.url" alt="" />
          <router-link :to="`/paint/${item.objectNumber}`">
            <h4>
              {{ item.title }}
            </h4>
          </router-link>
          <p class="long-title">{{ item.longTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Artist",
  computed: {
    ...mapState(["artistas"]),
  },
  data() {
    return {
      artist: "",
      data: "",
    };
  },
  methods: {
    async call() {
      setTimeout(async () => {
        const res = await fetch(
          `https://www.rijksmuseum.nl/api/nl/collection?key=2pgrS0Oq&involvedMaker=${this.$route.params.id}`
        );
        const data = await res.json();
        console.log(data);
        this.artist = data;
      }, 3000);
    },
    resume() {
      let res = this.artistas.find(
        (item) => item.name === this.$route.params.id
      );
      this.data = res.resume;
    },
  },
  created() {
    this.call();
    this.resume();
  },
};
</script>

<style scoped>
div.artist {
  color: white;
  background-color: rgba(0, 0, 0, 0.884);
  padding: 10px;
}
h1 {
  margin: 20px;
  text-decoration: underline;
}
div.loader {
  display: flex;
  justify-content: center;
}
img#gif {
  width: 100px;
}
p.resume {
  margin: 20px;
  line-height: 1.5;
}
h2 {
  margin: 20px auto;
  text-align: center;
  color: white;
  margin: 10px auto;
  font-weight: bold;
  text-decoration: none;
  border: none;
  background-color: rgb(182, 50, 50);
  padding: 10px;
  border-radius: 5px;
}
div.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
div.obra {
  width: 450px;
  margin: 20px;
}
div.obra img {
  width: 450px;
}
a {
  text-decoration: none;
  color: white;
}
p.long-title {
  color: grey;
}
</style>