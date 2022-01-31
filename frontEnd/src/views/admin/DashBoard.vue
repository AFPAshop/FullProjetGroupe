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
                <column-chart
                  :data="[
                    ['Pantalon', 32],
                    ['T-Shirt', 46],
                    ['Short', 8],
                    ['Chemise', 36],
                    ['Casquette', 30],
                  ]"
                  label="Stock"
                ></column-chart>
              </div>
              <div class="col">
                <h3>Ventes par produit</h3>
                <pie-chart
                  :data="[
                    ['Pantalon', 150],
                    ['T-Shirt', 180],
                    ['Short', 256],
                    ['Chemise', 45],
                    ['Casquette', 120],
                  ]"
                ></pie-chart>
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
      chartData: {
        "2021-05-13": 2,
        "2021-05-14": 5,
        "2021-05-15": 4,
      },
    };
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
