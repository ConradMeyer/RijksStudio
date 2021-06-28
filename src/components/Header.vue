<template>
  <div class="header">
    <h1>RIJKS STUDIO</h1>
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/collections">COLLECTIONS</router-link> |
      <router-link data-testid="test-fav" to="/favorites">FAVORITES</router-link> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
div.header {
  background-image: url("../assets/fondo.png");
  height: 250px;
  background-attachment: fixed;
  background-size: cover;
  background-position-y: -300px;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid white;
}
h1 {
    font-size: 4rem;
}
#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}
#nav a:hover {
  text-decoration: underline;
}
#nav a.router-link-exact-active {
  /* background-color: red; */
  text-decoration: underline;
}
</style>