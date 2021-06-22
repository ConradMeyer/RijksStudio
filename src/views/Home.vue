<template>
  <div class="home">
    <div class="container1">
      <h1>Welcome to Rijksmuseum</h1>
      <p>
        The Rijksmuseum was founded in The Hague on 19 November 1798 and moved
        to Amsterdam in 1808, where it was first located in the Royal Palace and
        later in the Trippenhuis. The current main building was designed by
        Pierre Cuypers and first opened in 1885. On 13 April 2013, after a
        ten-year renovation which cost € 375 million, the main building was
        reopened by Queen Beatrix. In 2013 and 2014, it was the most visited
        museum in the Netherlands with record numbers of 2.2 million and 2.47
        million visitors. It is also the largest art museum in the country.
      </p>
    </div>
    <div class="container2">
      <h3>Now in Rijksstudio</h3>
      <h4>Browse 722,509 works of art and 597,416 Rijksstudios > Visit our <router-link to="/collections">COLLECTIONS</router-link></h4>
      <div class="images">
        <img src="../assets/img1.png" alt="" />
        <img src="../assets/img2.jpg" alt="" />
        <img src="../assets/img3.jpg" alt="" />
        <img src="../assets/img4.png" alt="" />
        <img src="../assets/img5.jpg" alt="" />
        <img src="../assets/img6.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
div.home {
  background-color: rgba(0, 0, 0, 0.884);
  color: white;
  padding: 20px;
}
h1 {
  margin-bottom: 10px;
}
p {
  line-height: 1.5;
}
h3 {
  margin-top: 20px;
  text-decoration: underline;
}
h4 {
  margin-top: 10px;
}
a {
  color: white;
  text-decoration: none;
  background-color: rgb(182, 50, 50);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
div.images {
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 20px auto;
  justify-content: center;
}
img {
  width: 32%;
  margin: 5px;
}
</style>
