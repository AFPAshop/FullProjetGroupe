<template>
  <div id="app">
    <h1 class="rounded">Page des produits</h1>
    <div class="search input-group mb-4 shadow-sm">
      <router-link :to="'/admin/creationProduit'">
        <button class="create btn btn-outline-dark btn-lg px-5">
          Creation
        </button>
      </router-link>
      <span class="input-group-text bg-white" id="basic-addon1">
        <i class="fas fa-search"></i>
      </span>
      <input
        type="text"
        class="search form-control py-2"
        placeholder="Recherche par produit..."
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="searchProduct"
      />
    </div>
    <table>
      <tr>
        <td>Image</td>
        <td>Id</td>
        <td>Nom</td>
        <td>Prix</td>
      </tr>
      <tr v-for="p in filterProducts" :key="p.id">
        <td>
          <img
            style="height: 50px; width: 50px"
            :src="p.image"
            class="card-img-top img-fluid"
            :alt="p.title"
          />
        </td>
        <td>{{ p.id }}</td>
        <td>{{ formatProduct(p.title) }}</td>
        <td>{{ formatPrice(p.price) }} €</td>
        <td>
          <router-link :to="'/products/update/' + p.id">
            <button class="btn btn-outline-dark btn-lg px-5">Modif</button>
          </router-link>
        </td>
        <td>
          <button
            @click="deleteProduct(p.id)"
            class="btn btn-outline-dark btn-lg px-5"
          >
            Suppr.
          </button>
        </td>
      </tr>
    </table>
    <Retour />
  </div>
</template>

<script>
import Retour from "../../components/RetourAdmin.vue";
export default {
  name: "CompteBoutique",
  components: { Retour },
  data() {
    return {
      searchProduct: "",
      tva: [],
    };
  },
  computed: {
    filterProducts() {
      return this.$store.state.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(this.searchProduct.toLowerCase());
      });
    },
  },
  methods: {
    // mise en forme des données nom / prix
    formatProduct(product) {
      if (product) {
        return product.slice(0, 15) + "...";
      } else {
        return "Undefined";
      }
    },
    formatPrice(product) {
      return product.toFixed(2);
    },
    capitalized(data) {
      return data.charAt(0).toUpperCase() + data.slice(1);
    },
    //suppression du produit

    deleteProduct(id) {
      axios
        .post(this.$store.state.url + "/product/delete/" + id)
        .then()
        .catch();
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 15px auto;
  color: rgb(9, 65, 4);
  width: 50%;
  background-color: rgb(92, 81, 238);
}
.search {
  width: 40%;
  margin: 0 auto;
}
.create {
  margin-right: 25px;
}
table {
  width: 100%;
  max-width: 700px;
  min-width: 400px;
  text-align: center;
  margin: 0 auto;
}

table,
th,
td {
  border: 1px solid gray;
}

th,
td {
  height: 24px;
  padding: 4px;
  vertical-align: middle;
}
</style>
