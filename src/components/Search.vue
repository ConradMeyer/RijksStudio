<template>
  <div class="search">
    <label for="input">🔍 Search here:</label>
    <input @keyup="search" type="text" id="input" placeholder="Write a title or artist" v-model="data"/>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
      return {
          data: ""
      }
  },
  methods: {
      search() {
          this.$emit('handleSearch', this.data)
      }
  }
};
</script>

<style scoped>
div.search {
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(245, 245, 245, .8);
  color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  border-radius: 5px;
  box-shadow: 3px 3px 15px -2px black;
}
input {
  width: 60%;
  padding: 7px;
  border-radius: 5px;
  border: none;
  box-shadow: 3px 3px 15px -5px black;
}
</style>