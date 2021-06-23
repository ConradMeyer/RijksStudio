<template>
  <div class="collections">
    <h1>VISIT OUR COLLECTIONS</h1>
    <div class="container1">
      <div class="artist" v-for="(item, index) in artistas" :key="index">
        <router-link :to="`/collection/${item.name}`">
          <img :src="item.img" alt="" />
          <h3>{{ item.name }}</h3>
          <h4>RIJKS MUSEUM</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Collections",
  computed: {
    ...mapState(["artistas"]),
  },
  methods: {},
};
</script>

<style scoped>
div.collections {
  background-color: rgba(0, 0, 0, 0.884);
}
h1 {
  text-align: center;
  color: white;
  background-color: rgb(182, 50, 50);
  padding: 20px;
  border-bottom: 1px solid white;
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
