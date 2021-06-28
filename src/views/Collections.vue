<template>
  <div class="collections">
    <h1 data-testid="title-collection">VISIT OUR COLLECTIONS</h1>
    <div class="container1" v-if="artistas.length > 0">
      <div class="artist" v-for="(item, index) in artistas" :key="index">
        <router-link :to="`/collection/${item.name}`">
          <img :src="item.img" alt="" />
          <h3 role="button">{{ item.name }}</h3>
          <h4>RIJKS MUSEUM</h4>
        </router-link>
      </div>
    </div>
  <h2 v-else class="no-results">Oops, no hemos encontrado resultados...</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Collections",
  computed: {
    ...mapState(["artistas"]),
  },
  methods: {
    ...mapActions(['getArtist'])
  },
  created() {
    this.getArtist()
  }
};
</script>

<style scoped>
div.collections {
  background-color: rgba(0, 0, 0, 0.884);
  min-height: 200px;
}
h1 {
  text-align: center;
  color: white;
  background-color: rgb(182, 50, 50);
  padding: 20px;
  border-bottom: 1px solid white;
}
h2.no-results {
  text-align: center;
  color: white;
  margin: 50px auto;
}
div.container1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
div.artist {
  margin: 25px;
}
div.artist img {
  width: 350px;
}
div.artist a {
  text-decoration: none;
  color: white;
}
div.artist h3:hover {
  text-decoration: underline;
}
h4 {
  color: gray;
}
</style>
