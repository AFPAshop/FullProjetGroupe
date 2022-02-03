<template>
  <div id="app">
    <h1>Gestion Rôle</h1>
    <div class="container">
      <button
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target="#createRoleModal"
      >
        Créer Role
      </button>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Type</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in this.$store.state.role" :key="r.id">
            <th scope="row">{{ r.id }}</th>
            <td>{{ r.type }}</td>
            <td>
              <button class="btn btn-success" @click="showRole(r.id)">
                Modif
              </button>
            </td>
            <td>
              <button class="btn btn-success" @click="deleteRole(r.id)">
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
        v-for="r in this.$store.state.role"
        :key="r.id"
      >
        <div v-if="id == r.id">
          <div class="form-outline form-white mb-4">
            <input
              v-on:input="type = $event.target.value"
              v-bind:value="r.type"
              type="text"
              id="typeNameX"
              class="form-control form-control-lg"
            />
           
          </div>

          <button class="btn btn-success" @click="updateRole(r.id)">
            Update
          </button>
          <button class="btn btn-success" @click="hideRole">Retour</button>
        </div>
      </div>
    </div>

    <Role />
    <Retour />
  </div>
</template>

<script>
import Role from "../../components/creationRole";
import Retour from "../../components/RetourAdmin";
import axios from "axios";
export default {
  components: { Role, Retour },
  data() {
    return {
      show: false,
      id: 1,
      type: "",
    };
  },
  mounted() {
    console.log(this.$store.state.role);
  },
  methods: {
    showRole(id) {
      this.show = true;
      this.id = id;
    },
    hideRole() {
      this.show = false;
    },
    updateRole(id) {
      axios
        .put(this.$store.state.url + "/role/update/" + id, {
          type: this.type,
        })
        .then(() => console.log("Rôle modifié"))
        .then(() => this.$store.dispatch("getRolesAction"))
        .catch((err) => console.log(err));
      this.show = false;
    },
    deleteRole(id) {
      axios
        .delete(this.$store.state.url + "/role/delete/" + id)
        .then(() => console.log("Role supprimé"))
        .then(() => this.$store.dispatch("getRolesAction"))
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
