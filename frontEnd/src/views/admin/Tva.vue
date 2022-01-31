<template>
  <div id="app">
    <h1>Gestion TVA</h1>
    <div class="container">
      <button
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target="#createTvaModal"
      >
        Créer Tva
      </button>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Type</th>
            <th scope="col">Taux</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in this.$store.state.tva" :key="t.id">
            <th scope="row">{{ t.id }}</th>
            <td>{{ t.type }}</td>
            <td>{{ t.taux }}</td>
            <td>
              <button class="btn btn-success" @click="showTva(t.id)">
                Modif
              </button>
            </td>
            <td>
              <button class="btn btn-success" @click="deleteTva(t.id)">
                Suppr.
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="containerHide" v-if="show == true">
      <div
        class="containerHideInput"
        v-for="t in this.$store.state.tva"
        :key="t.id"
      >
        <div v-if="id == t.id">
          <div class="form-outline form-white mb-4">
            <input
              v-on:input="type = $event.target.value"
              v-bind:value="t.type"
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
              v-on:input="taux = $event.target.value"
              v-bind:value="t.taux"
              type="number"
              id="typeTauxX"
              class="form-control form-control-lg"
            />
            <label class="form-label" for="typeTauxX"
              >Taux de la tva en chiffre (ex: 1.206)</label
            >
          </div>
          <button class="btn btn-success" @click="updateTva(t.id)">
            Update
          </button>
          <button class="btn btn-success" @click="hideTva">Retour</button>
        </div>
      </div>
    </div>

    <Tva />
    <Retour />
  </div>
</template>

<script>
import Tva from "../../components/creationTva";
import Retour from "../../components/RetourAdmin";
import axios from "axios";
export default {
  components: { Tva, Retour },
  data() {
    return {
      show: false,
      id: 1,
      type: "",
      taux: "",
    };
  },
  mounted() {
    console.log(this.$store.state.tva);
  },
  methods: {
    showTva(id) {
      this.show = true;
      this.id = id;
    },
    hideTva() {
      this.show = false;
    },
    updateTva(id) {
      axios
        .put(this.$store.state.url + "/tva/update/" + id, {
          type: this.type,
          taux: this.taux,
        })
        .then(() => console.log("Tva modifié"))
        .then(() => this.$store.dispatch("getTvaAction"))
        .catch((err) => console.log(err));
      this.show = false;
    },
    deleteTva(id) {
      axios
        .delete(this.$store.state.url + "/tva/delete/" + id)
        .then(() => console.log("Tva supprimé"))
        .then(() => this.$store.dispatch("getTvaAction"))
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
</style>
