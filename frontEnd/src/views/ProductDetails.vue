<template>
  <div>
    <div class="container-md mt-5">
      <div v-for="product in $store.state.products" :key="product.id">
        <div v-if="product.id == $route.params.id">
          <div class="row">
            <div
              class="
                col-md-5 col-sm-6
                product-img
                border border-1 border-secondary
                bg-white
                rounded
              "
            >
              <img
                :src="product.image"
                :alt="product.title"
                class="img-fluid"
              />
            </div>
            <div
              class="
                col-md-7 col-sm-6
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
                  Category:
                  <span class="text-capitalize">{{ product.category }}</span>
                </p>
                <p class="my-2">
                  Rating:
                  <span
                    class="rating shadow-sm"
                    :class="{
                      highRating: product.rating.rate <= 5,
                      avgRating: product.rating.rate < 4,
                      lowRating: product.rating.rate < 3,
                    }"
                  >
                    {{ formatRating(product.rating.rate) }}
                  </span>
                </p>
                <p class="my-2">
                  Price:
                  <span class="text-capitalize">
                    <i class="fas fa-dollar-sign"></i>
                    {{ formatPrice(product.price) }}
                  </span>
                </p>
                <p class="mt-3 fs-6">
                  <strong class="fs-4">Description</strong>
                  <br />
                  {{ formatDescription(product.description) }}
                </p>
                <button
                  class="btn btn-success mt-2 btn-sm"
                  @click="addToCart(product)"
                >
                  <i class="fas fa-cart-plus mx-1"></i>
                  Add to Cart
                </button>
              </div>
              <div class="d-inline-block mt-4">
                <router-link to="/" class="text-decoration-none">
                  <a href="#" class="btn btn-dark d-flex align-items-center">
                    <i class="fas fa-arrow-left mx-1"></i>
                    Back to Main Page
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
      return this.$store.state.cart.push(product);
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  .product-img {
    height: 60vh;
    padding: 0;
    margin: 0;
    img {
      height: 100%;
      width: 100%;
      transform: scale(0.75, 0.85);
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