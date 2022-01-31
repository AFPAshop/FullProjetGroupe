<template>
  <div>
    <div class="container-md my-5">
      <div v-if="$store.state.cart.length == 0">
        <div class="alert alert-danger shadow-sm" role="alert">
          <i class="fas fa-exclamation-triangle mx-1"></i>
          Votre panier est vide.
        </div>
        <div class="d-inline-block mt-5">
          <router-link to="/" class="text-decoration-none">
            <a
              style="color: white"
              href="#"
              class="btn btn-dark d-flex align-items-center"
            >
              <i class="fas fa-arrow-left mx-1"></i>
              Retour Page Produits
            </a>
          </router-link>
        </div>
      </div>
      <div v-else>
        <div class="table-responsive">
          <table
            class="
              table table-striped table-bordered table-hover table-light
              shadow-sm
            "
          >
            <thead>
              <tr class="text-center">
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Nom</th>
                <th scope="col">Quantity</th>
                <th scope="col">Prix HT</th>
                <th scope="col">Total TTC</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(product, index) in $store.state.cart"
                :key="index"
                class="text-center"
              >
                <td>{{ index + 1 }}</td>
                <td>
                  <img
                    :src="product.image"
                    :alt="product.title"
                    class="img-fluid"
                  />
                </td>
                <td>{{ product.title }}</td>
                <td class="text-capitalize">{{ product.quantity }}</td>
                <td>
                  {{ product.price.toFixed(2) }}
                  <i class="fas fa-euro-sign"></i>
                </td>
                <td>
                  {{ (product.quantity * product.price).toFixed(2) }}
                  <i class="fas fa-euro-sign"></i>
                </td>

                <td>
                  <button class="btn btn-danger" @click="discardProduct(index)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="
            d-flex
            flex-sm-row flex-column
            align-items-center
            justify-content-between
            mt-5
          "
        >
          <div class="d-inline-block">
            <router-link to="/" class="text-decoration-none">
              <a
                style="color: white"
                href="#"
                class="btn btn-dark d-flex align-items-center"
              >
                <i class="fas fa-arrow-left mx-1"></i>
                Back to Main Page
              </a>
            </router-link>
          </div>
          <div class="d-flex align-items-center mt-sm-0 mt-4">
            <p class="mx-2 fs-5">Total Price:</p>
            <p class="fs-3">
              <i class="fas fa-dollar-sign mx-0"></i>
              {{ totalPrice.toFixed(2) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartDetails",
  data() {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    getTotalPrice() {
      if (this.$store.state.cart != "") {
        this.$store.state.cart.forEach((item) => {
          this.totalPrice += item.price * item.quantity;
        });
      }
    },
    discardProduct(index) {
      let item =
        this.$store.state.cart[index].price *
        this.$store.state.cart[index].quantity;
      this.totalPrice -= item;
      this.$store.state.items -= this.$store.state.cart[index].quantity;
      this.$store.state.cart.splice(index, 1);
    },
  },
  created() {
    this.getTotalPrice();
  },
};
</script>

<style lang="scss" scoped>
table {
  tbody {
    tr {
      td {
        height: 6rem;
        width: 2rem;
        img {
          width: 60%;
          height: 100%;
        }
      }
    }
  }
}
</style>