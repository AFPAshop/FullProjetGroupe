<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade bd-example-modal-lg"
      id="createCategoryModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="createCategoryModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <section class="vh-100 gradient-custom">
            <div class="container py-2 h-100">
              <div
                class="
                  row
                  d-flex
                  justify-content-center
                  align-items-center
                  h-100
                "
              >
                <div>
                  <div
                    class="card bg-dark text-white"
                    style="border-radius: 1rem"
                  >
                    <div class="card-body p-5 text-center">
                      <div class="mb-md-0 mt-md-4 pb-1">
                        <h2 class="fw-bold mb-2 text-uppercase">
                          Création categorie
                        </h2>
                        <div class="form-outline form-white mb-4">
                          <input
                            v-model="nom"
                            type="text"
                            id="typeNameX"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="typeNameX"
                            >Renseigner le nom de la catégorie</label
                          >
                        </div>
                        <b-form-checkbox
                          class="formCheckBox"
                          size="lg"
                          id="checkbox-1"
                          v-model="idParentChecked"
                          name="checkbox-1"
                        >
                          C'est une sous-catégorie ?
                        </b-form-checkbox>
                        <div
                          v-if="idParentChecked == true"
                          class="form-outline form-white mb-4"
                        >
                          <select
                            v-model="id_parent"
                            id="typeid_parentX"
                            class="form-control form-control-lg"
                          >
                            <option value="">Select Catégorie Parent</option>
                            <option
                              v-for="c in parentCategory"
                              :key="c.id"
                              :value="c.id"
                            >
                              {{ c.nom }}
                            </option>
                          </select>
                          <label class="form-label" for="typeid_parentX"
                            >Sélectionner la catégorie parents
                          </label>
                        </div>
                        <br />
                        <button
                          data-dismiss="modal"
                          @click="createCategorie"
                          class="inscription btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Valider
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "createcategorie",
  data() {
    return {
      nom: "",
      id_parent: "",
      filterCategory: [],
      idParentChecked: false,
    };
  },
  mounted() {},
  computed: {
    parentCategory() {
      return this.$store.state.categories.filter(
        (category) => category.id_parent === 0
      );
    },
  },

  methods: {
    createCategorie() {
      axios
        .post(
          this.$store.state.url + "/category/create",
          {
            nom: this.nom,
            id_parent: this.id_parent,
          },
          {
            header: {},
          }
        )
        .then(function (response) {
          console.log(response.data);
        })
        .then(() => this.$store.dispatch("getCategoriesAction"))
        .catch(function (error) {
          error;
        });
      this.id_parent = "";
      this.nom = "";
    },
    idParentsChecked() {
      this.idParentChecked = true;
    },
  },
};
</script>

<style scoped>
.modal-content {
  background-color: transparent;
  border: none;
}
.container {
  margin-top: 0px;
}
.password-icon {
  width: 50px;
  margin: auto;
}
.password-icon:hover {
  cursor: pointer;
  color: #ff4754;
  transform: scale(1.5);
}
label {
  background: #212529;
}
input {
  outline: 1px white solid;
}
input:focus {
  background: transparent;
  outline: 1px white solid;
  color: white;
}
.password-icon {
  margin-top: 0px;
}
.form-check {
  width: 300px;
}
</style>