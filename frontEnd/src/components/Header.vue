<template>
  <header class="py-3">
    <div
      v-if="this.$store.state.user.userRole != 1"
      class="container-md d-flex justify-content-between align-items-center"
    >
      <router-link to="/">
        <h2 class="text-white">{{ nom }}</h2>
      </router-link>
      <ul
        v-if="this.$store.state.user.userRole != 1"
        class="nav justify-content-center"
      >
        <li v-for="c in evenCategory" :key="c.id" class="nav-item">
          <a style="color: azure" class="nav-link active" href="#">{{
            c.nom
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
      <h2 v-if="this.$store.state.user.userRole == 2" class="text-white">
        Bonjour {{ this.$store.state.user.userfirstName }}
        {{ this.$store.state.user.userlastName }}
      </h2>
      <div v-if="this.$store.state.user.userRole == 2">
        <router-link to="/cartDetails" class="text-decoration-none">
          <h2 class="text-white cursor">
            <i style="color: #198754" class="fas fa-shopping-cart mx-1"></i>
            {{ this.$store.state.items }}
          </h2>
        </router-link>
      </div>
      <div v-if="this.$store.state.user.userRole == 2">
        <router-link
          :to="'/user/infos/' + this.$store.state.user.userId"
          class="text-decoration-none"
        >
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
        v-if="this.$store.state.login == false"
      >
        Login
      </button>
      <button
        type="button"
        class="btn btn-success"
        @click="logout"
        v-if="this.$store.state.login == true"
      >
        Logout
      </button>
      <Login />
    </div>
    <div
      v-if="this.$store.state.user.userRole == 1"
      class="container-md d-flex justify-content-between align-items-center"
    >
      <router-link to="/admin/">
        <h2 class="text-white">{{ nom }}</h2>
      </router-link>
      <h2 class="text-white">Bonjour Administrateur</h2>
      <button type="button" class="btn btn-success" @click="logout">
        Logout
      </button>
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
    if (this.$store.state.user.userRole == 1) {
      this.$router.push("/admin/");
    }
  },
  computed: {
    evenCategory() {
      return this.$store.state.categories.filter(
        (category) => category.id_parent === 0
      );
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$store.state.user = [];
      this.$store.state.login = false;
      this.$router.push("/");
    },
  },
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