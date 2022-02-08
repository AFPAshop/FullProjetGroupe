<template>
  <div>
    <nav class="headerNav navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <h2 class="text-white">{{ nom }}</h2>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul v-if="this.$store.state.user.userRole != 1" class="navbar-nav">
            <li class="nav-item">
              <button
                class="buttoncat nav-link active ms-5"
                aria-current="page"
                @click="affichProduits"
              >
                Produits
              </button>
            </li>
          </ul>
          <ul class="nav navbar-nav mx-auto">
            <li class="nav-item">
              <h2
                v-if="this.$store.state.user.userRole == 2"
                class="text-white"
              >
                Bonjour {{ this.$store.state.user.userfirstName }}
                {{ this.$store.state.user.userlastName }}
              </h2>
              <h2
                v-if="this.$store.state.user.userRole == 1"
                class="text-white"
              >
                Bonjour Administrateur
                {{ this.$store.state.user.userfirstName }}
              </h2>
            </li>
          </ul>
        </div>
        <ul class="nav navbar-nav">
          <li class="nav-item me-5">
            <div v-if="this.$store.state.user.userRole == 2">
              <router-link to="/cartDetails" class="text-decoration-none">
                <h2 class="text-white cursor">
                  <i
                    style="color: #198754"
                    class="fas fa-shopping-cart mx-1"
                  ></i>
                  {{ this.$store.state.items }}
                </h2>
              </router-link>
            </div>
          </li>
          <li class="nav-item me-5">
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
          </li>
          <li class="nav-item me-5">
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
          </li>
        </ul>
      </div>
    </nav>
    <Login />
  </div>
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
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$store.state.user = [];
      this.$store.state.login = false;
      this.$router.push("/");
      this.$store.state.conditionAffichageProduits == null;
    },
    changeCat(id) {
      this.$store.state.catProduct = id;
      console.log(this.$store.state.catProduct);
    },
    affichProduits() {
      this.$store.state.conditionAffichageProduits = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.headerNav {
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
.buttoncat {
  background: none;
  color: inherit;
  border: none;
  padding: 15px;
  font: inherit;
  outline: inherit;
  font-size: 1.5em;
}
</style>