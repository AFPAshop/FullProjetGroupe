<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade bd-example-modal-lg"
      id="createTvaModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="createTvaModal"
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
                          Création Tva
                        </h2>
                        <div class="form-outline form-white mb-4">
                          <input
                            v-model="nom"
                            type="text"
                            id="typeNameX"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="typeNameX"
                            >Taux de la Tva en % (ex: 20.6%)</label
                          >
                        </div>
                        <div class="form-outline form-white mb-4">
                          <input
                            v-model="taux"
                            type="number"
                            id="typeTauxX"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="typeTauxX"
                            >Taux de la tva en chiffre (ex: 1.206)</label
                          >
                        </div>
                        <button
                          data-dismiss="modal"
                          @click="createTva"
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
  name: "createTva",
  data() {
    return {
      nom: "",
      taux: "",
    };
  },
  mounted() {},

  methods: {
    createTva() {
      axios
        .post(
          this.$store.state.url + "/tva/create",
          {
            data: {
              nom: this.nom,
              taux: this.taux,
            },
          },
          {
            header: {},
          }
        )
        .then(function (response) {
          console.log(response.data);
        })
        .then(() => this.$store.dispatch("getTvaAction"))
        .catch(function (error) {
          error;
        });
      this.taux = "";
      this.nom = "";
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
</style>