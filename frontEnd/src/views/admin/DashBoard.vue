<template>
  <div id="app">
    <div class="container_dashboard container">
      <div class="row">
        <div class="row_button col-3">
          <router-link to="/admin/produits">
            <button class="btn btn-outline-success btn-lg px-5">
              Produits
            </button>
          </router-link>

          <router-link to="/admin/stock">
            <button class="btn btn-outline-success btn-lg px-5">Stock</button>
          </router-link>

          <router-link to="/admin/tva">
            <button class="btn btn-outline-success btn-lg px-5">TVA</button>
          </router-link>

          <router-link to="/admin/categories">
            <button class="btn btn-outline-success btn-lg px-5">
              Catégories
            </button>
          </router-link>

          <router-link to="/admin/commande">
            <button class="btn btn-outline-success btn-lg px-5">
              Commande
            </button>
          </router-link>

          <router-link to="/admin/roles">
            <button class="btn btn-outline-success btn-lg px-5">Roles</button>
          </router-link>

          <router-link to="/admin/compteClient">
            <button class="btn btn-outline-success btn-lg px-5">
              Compte client
            </button>
          </router-link>
          <router-link to="/admin/association">
            <button class="btn btn-outline-success btn-lg px-5">
              Association
            </button>
          </router-link>
        </div>
        <div class="col-9">
          <div class="container">
            <div class="row">
              <div class="col">
                <h3>Stocks Disponnible</h3>
                <column-chart :data="chartDataHomme"></column-chart>
              </div>
              <div class="col">
                <h3>Ventes par produit</h3>
                <pie-chart :data="chartDataHomme"></pie-chart>
              </div>
              <div class="row mt-5">
                <div class="col">
                  <h3>Commande en cours</h3>
                  <table
                    style="width: 480px"
                    class="table table-hover table-dark"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Commande</th>
                        <th scope="col">Client</th>
                        <th scope="col">Tel</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">2</th>
                        <td>Mr John SMITH</td>
                        <td>06.79.65.21</td>
                        <td>
                          <button
                            style="width: 80px"
                            class="btn btn-success"
                            @click="showTva(t.id)"
                          >
                            Valider
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <h3>Commande non récupérée</h3>
                  <table
                    style="width: 480px"
                    class="table table-hover table-dark"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Commande</th>
                        <th scope="col">Client</th>
                        <th scope="col">Tel</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">3</th>
                        <td>Mr Jean BON</td>
                        <td>06.02.36.18</td>
                        <td>
                          <button
                            style="width: 100px"
                            class="btn btn-success"
                            @click="showTva(t.id)"
                          >
                            Info client
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartDataHomme: [],
      chartDataFemme: [],
      chartDataEnfant: [],
      choixColumn: "",
      choixPie: "",
    };
  },

  mounted() {
    this.$store.state.products.forEach((p) => {
      if (p.id_CATEGORIE == 1) {
        this.chartDataHomme.push([p.title, p.stock]);
      } else if (p.id_CATEGORIE == 2) {
        this.chartDataFemme.push([p.title, p.stock]);
      } else {
        this.chartDataEnfant.push([p.title, p.stock]);
      }
    });
    console.log(this.chartDataHomme);
    console.log(this.chartDataFemme);
    console.log(this.chartDataEnfant);
  },
  computed() {},
  methods: {
    dataHomme() {
      document.getElementById("column").setAttribute(":data", "chartDataHomme");
    },
    dataFemme() {
      document.getElementById("column").setAttribute(":data", "chartDataFemme");
    },
    dataEnfant() {
      document
        .getElementById("column")
        .setAttribute(":data", "chartDataEnfant");
    },
  },
};
</script>

<style lang="scss" scoped>
.container_dashboard {
  margin-top: 25px;
  .row_button {
    button {
      width: 240px;
      margin-top: 15px;
      margin-left: 15px;
    }
  }
}
</style>
