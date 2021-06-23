<template>
  <div>
    <div v-if="data === ''" class="loader">
      <img src="../assets/spinner2.gif" id="gif" />
    </div>
    <div v-else-if="this.data.artObject" class="paint">
      <h1>
        {{ this.data.artObject.title }} -
        {{ this.data.artObject.principalMaker }}
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
            <div
              v-for="(item, index) in this.data.artObject.colors"
              :key="index"
            >
              <div class="color" :style="`background-color: ${item.hex}`"></div>
            </div>
          </div>
          <div v-if="flag1" class="modal uno">
            PICTURE SAVED SUCCESSFULLY 😍
          </div>
          <div v-if="flag2" class="modal dos">
            PICTURE DELETED SUCCESSFULLY 😢
          </div>
          <div v-if="checkFav" class="no-like">
            <img
              @click="delet()"
              class="like"
              src="../assets/like.svg"
              alt="no-like"
            />
            <h4>Delete this picture from favorite</h4>
          </div>
          <div v-else class="no-like">
            <img
              @click="save()"
              class="like"
              src="../assets/no-like.svg"
              alt="no-like"
            />
            <h4>Save this picture as favorite</h4>
          </div>
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
      data: "",
      flag1: false,
      flag2: false,
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
      setTimeout(async () => {
        const res = await fetch(
          `https://www.rijksmuseum.nl/api/en/collection/${this.$route.params.id}?key=2pgrS0Oq`
        );
        const data = await res.json();
        this.data = data;
      }, 500);
    },
    save() {
      this.flag1 = true;
      this.saveFav(this.data);
      setTimeout(() => {
        this.flag1 = false;
      }, 2000);
    },
    delet() {
      this.flag2 = true;
      this.deleteFav(this.data.artObject.id);
      setTimeout(() => {
        this.flag2 = false;
      }, 2000);
    },
  },
  created() {
    this.call();
  },
};
</script>

<style scoped>
div.modal {
  margin-top: 80px;
  position: absolute;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  animation: modal 1s alternate infinite ease-in;
}
div.uno {
  background-color: rgb(67, 192, 67);
}
div.dos {
  background-color: rgb(192, 60, 60);
}
div.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.884);
  width: 100%;
  height: 210px;
}
img#gif {
  width: 100px;
  height: 100px;
}
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

@keyframes modal {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>