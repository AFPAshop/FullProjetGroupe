<template>
  <div>
    <div class="container-md mt-5">
      <div v-for="product in $store.state.products" :key="product.id">
        <div v-if="product.id == $route.params.id">
          <div class="row">
            <div class="col-md-6 col-sm-6 product-img bg-white rounded">
              <img
                :src="'http://localhost:5000/' + product.image"
                class="img-fluid"
                :alt="product.title"
              />
            </div>
            <div
              class="
                col-md-6 col-sm-6
                fs-5
                d-flex
                flex-column
                justify-content-between
                align-items-start
                mb-md-0 mb-5
                px-4
              "
            >
              <div class="mt-4 mt-md-0">
                <h2 class="mb-4">{{ product.title }}</h2>
                <p class="my-2">
                  <span class="text-muted">Categorie : </span>
                  <span
                    v-for="c in this.$store.state.categories"
                    :key="c.id"
                    class="text-capitalize"
                  >
                    <span v-if="product.id_CATEGORIE == c.id">{{ c.nom }}</span>
                  </span>
                </p>
                <p class="my-2">
                  <span class="text-muted">Prix TTC : </span>
                  <span
                    v-for="t in this.$store.state.tva"
                    :key="t.id"
                    class="text-capitalize"
                  >
                    <span v-if="t.id == product.id_TVA">
                      {{ formatPrice(product.price * t.taux) }}
                      <i class="fas fa-euro-sign"></i>
                    </span>
                  </span>
                </p>
                <p class="mt-3 fs-6">
                  <strong class="fs-4">Description</strong>
                  <br />
                  En cours
                </p>
                <button
                  class="btn btn-success mt-2 btn-sm"
                  @click="addToCart(product)"
                >
                  <i class="fas fa-cart-plus mx-1"></i>
                  Ajouter au panier
                </button>
              </div>
              <div class="d-inline-block mt-4">
                <router-link to="/" class="text-decoration-none">
                  <a href="#" class="btn btn-dark d-flex align-items-center">
                    <i class="fas fa-arrow-left mx-1"></i>
                    Retour aux produits
                  </a>
                </router-link>
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
  name: "ProductDetails",
  data() {
    return {};
  },
  methods: {
    formatRating(product) {
      return product.toFixed(1);
    },
    formatPrice(product) {
      return product.toFixed(2);
    },
    formatDescription(product) {
      return product.charAt(0).toUpperCase() + product.slice(1);
    },
    addToCart(product) {
      console.log(product);
      console.log(this.$store.state.cart);
      for (let i = 0; i < this.$store.state.cart.length; i++) {
        if (this.$store.state.cart[i].id == product.id) {
          this.$store.state.items++;
          return this.$store.state.cart[i].quantity++;
        }
      }
      product.quantity = 1;
      this.$store.state.items++;
      return this.$store.state.cart.push(product);
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  .product-img {
    padding: 0;
    margin: 0;
    img {
      height: 300px;
      width: 300px;
      @media (max-width: 30rem) {
        transform: scale(0.9);
      }
    }
  }
  .quantity-input {
    width: 3rem;
  }
}
.container-md {
  display: flex;
}
</style>