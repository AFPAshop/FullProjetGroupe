<template>
  <div id="app">
    <h1>Gestion Categorie</h1>
    <div class="container">
      <button
        Nom="button"
        class="btncategory btn btn-success"
        data-toggle="modal"
        data-target="#createCategoryModal"
      >
        Créer Categorie
      </button>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">id_parent</th>
            <th scope="col">Nom</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in this.$store.state.categories" :key="c.id">
            <th scope="row">{{ c.id }}</th>
            <td>{{ c.id_parent }}</td>
            <td>{{ c.nom }}</td>
            <td>
              <button class="btn btn-success" @click="showCategory(c.id)">
                Modif
              </button>
            </td>
            <td>
              <button class="btn btn-success" @click="deleteCategory(c.id)">
                Suppr.
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--container modif categorie -->
    <div class="containerHide" v-if="show == true">
      <div
        class="containerHideInput"
        v-for="c in this.$store.state.categories"
        :key="c.id"
      >
        <div v-if="id == c.id">
          <div class="form-outline form-white mb-4">
            <input
              v-on:input="nom = $event.target.value"
              v-bind:value="c.nom"
              Nom="text"
              id="NomNameX"
              class="form-control form-control-lg"
            />
          </div>
          <div class="form-outline form-white mb-4">
            <div v-if="c.id_parent > 0" class="form-outline form-white mb-4">
              <select
                v-on:input="id_parent = $event.target.value"
                v-bind:value="c.id_parent"
                id="typeid_parentX"
                class="form-control form-control-lg"
              >
                <option value="">Select Catégorie Parent</option>
                <option
                  v-for="cat in parentCategory"
                  :key="cat.id"
                  :value="cat.id"
                >
                  {{ cat.id }} - {{ cat.nom }}
                </option>
              </select>
            </div>
            <button class="btn btn-success" @click="updateCategory(c.id)">
              Update
            </button>
            <button class="btn btn-success" @click="hideCategory">
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
    <Category />
    <Retour />
  </div>
</template>

<script>
import Category from "../../components/creationCategory";
import Retour from "../../components/RetourAdmin";
import axios from "axios";
export default {
  components: { Category, Retour },
  data() {
    return {
      show: false,
      id: 1,
      nom: "",
      id_parent: "",
      checkIdParent: false,
    };
  },
  mounted() {
    console.log(this.$store.state.categories);
  },
  computed: {
    parentCategory() {
      return this.$store.state.categories.filter(
        (category) => category.id_parent === 0
      );
    },
  },
  methods: {
    showCategory(id) {
      this.show = true;
      this.id = id;
      this.$store.state.categories.forEach((category) => {
        if (id == category.id) {
          this.nom = category.nom;
          console.log(this.nom);
          this.id_parent = category.id_parent;
          console.log(this.id_parent);
        }
      });
    },
    hideCategory() {
      this.show = false;
    },
    updateCategory(id) {
      axios
        .put(this.$store.state.url + "/category/update/" + id, {
          nom: this.nom,
          id_parent: this.id_parent,
        })
        .then(() => console.log("Catégorie modifié"))
        .then(() => this.$store.dispatch("getCategoriesAction"))
        .catch((err) => console.log(err));
      this.show = false;
      this.nom = "";
      this.id_parent = "";
      this.checkIdParent = false;
    },
    deleteCategory(id) {
      axios
        .delete(this.$store.state.url + "/category/delete/" + id)
        .then(() => console.log("Categorie supprimé"))
        .then(() => this.$store.dispatch("getCategoryAction"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  display: flex;
}
.containerHide {
  width: 20%;
  margin: 15px auto;
  .containerHideInput {
    margin: 0 auto;
  }
  button {
    margin: 0 auto 0 18%;
  }
}
button {
  margin: 0 auto;
}
h1 {
  text-align: center;
  margin: 15px auto;
  color: rgb(1, 1, 32);
  width: 50%;
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
.btncategory {
  height: 80px;
  margin-right: 15px;
}
</style>
