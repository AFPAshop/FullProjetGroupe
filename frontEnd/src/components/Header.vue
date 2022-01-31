<template>
  <header class="py-3">
    <div class="container-md d-flex justify-content-between align-items-center">
      <router-link to="/">
        <h2 class="text-white">{{ nom }}</h2>
      </router-link>
      <ul class="nav justify-content-center">
        <li v-for="c in evenCategory" :key="c.id" class="nav-item">
          <a style="color: azure" class="nav-link active" href="#">{{
            c.nom_categorie
          }}</a>
        </li>
        <!-- <li class="nav-item" v-if="Role == 'admin'">
          <router-link to="/admin">
            <a style="color: azure" class="nav-link active" href="#"
              >Home Admin</a
            >
          </router-link>
        </li> -->
      </ul>
      <div>
        <router-link to="/cartDetails" class="text-decoration-none">
          <h2 class="text-white cursor">
            <i style="color: #198754" class="fas fa-shopping-cart mx-1"></i>
            {{ this.$store.state.items }}
          </h2>
        </router-link>
      </div>
      <div>
        <router-link to="/admin/" class="text-decoration-none">
          <h2 class="text-white cursor">
            <i style="color: #198754" class="fas fa-user"></i>
          </h2>
        </router-link>
      </div>
      <button
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target="#loginModal"
      >
        Login
      </button>
      <!-- <button        
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Logout
      </button> -->
      <Login />
    </div>
  </header>
</template>

<script>
import axios from "axios";
import Login from "./Login.vue";
export default {
  name: "Header",
  components: { Login },
  data() {
    return {
      nom: "",
    };
  },
  mounted() {
    axios.get(this.$store.state.url + "/getNameBdd").then((res) => {
      res.data.forEach((e) => {
        this.nom = e.name;
      });
    });
  },
  computed: {
    evenCategory() {
      return this.$store.state.categories.filter(
        (category) => category.id_parent === 0
      );
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
header {
  background-color: #08183f;
  a {
    text-decoration: none;
  }
  h2 {
    text-shadow: -1px 3px 2px rgba(0, 0, 0, 0.3);
    &.cursor {
      cursor: pointer;
    }
  }
}
</style>