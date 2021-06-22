<template>
  <div class="footer">
    <div class="container1">
      <h3>VISITOR INFORMATION</h3>
      <p>Open daily 9h to 17h</p>
      <p>Museumstraat 1, Amsterdam</p>
    </div>
    <div class="container2">
      <a href="https://www.rijksmuseum.nl/en/support/donate" target="_blank">
        <button>Donate today</button>
      </a>
      <a
        href="https://www.rijksmuseum.nl/en/newsletter?slug=NEWSLETTER_EN"
        target="_blank"
      >
        <button>Newsletter</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
div.footer {
  background-color: black;
  color: white;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
button {
  padding: 15px 20px;
  width: 150px;
  margin-right: 20px;
  font-weight: bold;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;
}
button:hover {
  cursor: pointer;
  background-color: white;
  color: black;
  transition: color ease 1s;
}
</style>