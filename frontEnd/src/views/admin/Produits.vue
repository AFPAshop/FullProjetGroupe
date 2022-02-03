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
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Image</th>
          <th scope="col">Nom</th>
          <th scope="col">Prix</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in filterProducts" :key="p.id">
          <td scope="row">{{ p.id }}</td>
          <td>
            <img
              style="height: 50px; width: 50px"
              :src="'http://localhost:5000/' + p.image"
              class="card-img-top img-fluid"
              :alt="p.title"
            />
          </td>
          <td>{{ formatProduct(p.title) }}</td>
          <td>{{ formatPrice(p.price) }} €</td>
          <td>
            <button
              @click="updateProduct"
              class="btn btn-outline-success btn-lg px-5"
            >
              Modif
            </button>
          </td>
          <td>
            <button
              @click="deleteProduct(p.id)"
              class="btn btn-outline-success btn-lg px-5"
            >
              Suppr.
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- formulaire de modification du produit -->
    <div v-if="show == true">
      <form
        @submit.prevent="insererProduit"
        enctype="multipart/form-data"
        class="input creation"
      >
        <input
          v-model="title"
          class="form-control form-control-lg"
          type="text"
          name="title"
          placeholder="Entrez le nom du produit à ajouter"
          id="title"
          required
        />
        <div class="select">
          <input
            v-model="price"
            class="form-control form-control-lg"
            type="text"
            name="price"
            id="price"
            placeholder="Entrez le price"
            required
          />
          <input
            v-model="stock"
            class="form-control form-control-lg"
            type="text"
            name="stock"
            placeholder="Indiquez le stock"
            required
          />
        </div>
        <input
          type="file"
          ref="image"
          @change="onFileSelected"
          class="form-control form-control-lg"
          id="uploadImage"
          name="myPhoto"
        />
        <button @click="onFileSelected" class="btn btn-success">UpLoad</button>

        <img
          class="previewImage"
          id="uploadPreview"
          style="width: 200px; height: 200px"
        />

        <b-form-checkbox
          class="formCheckBox"
          size="lg"
          id="checkbox-1"
          v-model="checked"
          name="checkbox-1"
        >
          Ce produit à une date de limite de consommation ?
        </b-form-checkbox>

        <input
          v-if="checked == true"
          v-model="dlc"
          class="form-control form-control-lg"
          type="date"
          placeholder="Validité du produit"
          name="dlc"
          id="dlc"
        />
        <div class="select">
          <select
            v-model="id_TVA"
            class="form-control form-control-lg"
            name="tva"
            placeholder="Indiquez le taux de TVA"
            id="id_TVA"
          >
            <option value="">Select Taux TVA</option>
            <option
              v-for="t in this.$store.state.tva"
              :key="t.id"
              :value="t.id"
            >
              {{ t.type }}
            </option>
          </select>
          <select
            class="form-control form-control-lg"
            v-model="id_CATEGORIE"
            name="categorie"
            id="id_CATEGORIE"
          >
            <option value="">Select Catégorie</option>
            <option
              v-for="cat in this.$store.state.categories"
              :key="cat.id"
              :value="cat.id"
              description="Selectionner la catégorie du produit"
            >
              {{ cat.nom }}
            </option>
          </select>
        </div>
        <button
          class="inscription btn btn-outline-dark btn-lg px-5"
          type="submit"
        >
          Création Produit
        </button>
      </form>
    </div>
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
      show: false,
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
    updateProduct(id) {
      this.show = true;
      this.id = id;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 15px auto;
  color: rgb(10, 4, 65);
  width: 50%;
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
