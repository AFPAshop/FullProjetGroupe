<template>
  <div class="container-md my-5">
    <div class="row">
      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5">
        <!-- Filter by categories -->
        <select
          class="form-select py-2 shadow-sm text-capitalize mb-4"
          v-model="filterByCategory"
        >
          <option value="">Toutes les catégories</option>
          <option
            :value="product"
            v-for="product in eliminateDuplicatedCategories(
              $store.state.products
            )"
            :key="product"
          >
            <span
              v-for="c in this.$store.state.categories"
              :key="c.id"
              class="text-capitalize"
            >
              <span v-if="product == c.id">{{ c.nom }}</span>
            </span>
          </option>
        </select>
        <!-- Sort by prices -->
        <select
          class="form-select py-2 shadow-sm mb-4"
          v-model="sortByPrice"
          @change="sortProductsByPrice($store.state.products)"
        >
          <option value="" disabled>Trier par prix</option>
          <option value="increasingOrder">Ordre Croissant</option>
          <option value="decreasingOrder">Ordre Décroissant</option>
        </select>
        <!-- Sort by ratings -->
        <!-- <select
          class="form-select py-2 shadow-sm mb-4"
          v-model="sortByRating"
          @change="sortProductsByRating($store.state.products)"
        >
          <option value="" disabled>Trier par Note</option>
          <option value="increasingOrder">Ordre Croissant</option>
          <option value="decreasingOrder">Ordre Décroissant</option>
        </select> -->
      </div>
      <div class="col-xl-10 col-lg-9 col-md-8 col-sm-7">
        <!-- Search Products -->
        <div class="input-group mb-4 shadow-sm">
          <span class="input-group-text bg-white" id="basic-addon1">
            <i class="fas fa-search"></i>
          </span>
          <input
            type="text"
            class="form-control py-2"
            placeholder="Recherche par produit..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="searchProduct"
          />
        </div>
        <!-- Display Products -->
        <div
          class="
            d-flex
            flex-wrap
            justify-content-sm-between justify-content-center
          "
        >
          <div
            class="card mb-5 shadow"
            v-for="product in filterProducts"
            :key="product.id"
          >
            <div class="card-img">
              <img
                :src="'http://localhost:5000/' + product.image"
                class="card-img-top img-fluid"
                :alt="product.title"
              />
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h4 class="card-title mb-3">
                  {{ product.title }}
                </h4>
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
              </div>
              <div class="d-inline-block mt-4">
                <router-link
                  :to="'/product/' + product.id"
                  class="text-decoration-none"
                >
                  <button
                    style="margin-right: 75px"
                    class="btn btn-success mt-2 btn-sm"
                  >
                    More Info
                    <i class="fas fa-angle-double-right mx-1"></i>
                  </button>
                </router-link>
                <button
                  class="btn btn-success mt-2 btn-sm"
                  @click="addToCart(product)"
                >
                  <i class="fas fa-cart-plus mx-1"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Products",
  data() {
    return {
      searchProduct: "",
      filterByCategory: "",
      sortByPrice: "",
      sortByRating: "",
    };
  },
  computed: {
    filterProducts() {
      return this.$store.state.products.filter((product) => {
        return (
          (product.title
            .toLowerCase()
            .includes(this.searchProduct.toLowerCase()) &&
            product.id_CATEGORIE == this.filterByCategory) ||
          this.filterByCategory == ""
        );
      });
    },
  },
  methods: {
    formatProduct(product) {
      if (product) {
        return product.slice(0, 15) + "...";
      } else {
        return "Undefined";
      }
    },
    formatRating(product) {
      return product.toFixed(1);
    },
    formatPrice(product) {
      return product.toFixed(2);
    },
    eliminateDuplicatedCategories(products) {
      let arr = [];
      products.forEach((product) => {
        arr.push(product.id_CATEGORIE);
      });
      console.log(arr);
      return [...new Set(arr)];
    },

    capitalized(data) {
      return data.charAt(0).toUpperCase() + data.slice(1);
    },

    sortProductsByPrice(products) {
      this.sortByRating = "";
      if (this.sortByPrice == "increasingOrder") {
        return products.sort((a, b) => a.price - b.price);
      } else if (this.sortByPrice == "decreasingOrder") {
        return products.sort((a, b) => b.price - a.price);
      }
    },

    // sortProductsByRating(products) {
    //   this.sortByPrice = "";
    //   if (this.sortByRating == "increasingOrder") {
    //     return products.sort((a, b) => a.rating.rate - b.rating.rate);
    //   } else if (this.sortByRating == "decreasingOrder") {
    //     return products.sort((a, b) => b.rating.rate - a.rating.rate);
    //   }
    // },

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

    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },

    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },

    categoryName(data) {
      this.$store.state.categories.forEach((c) => {
        if ((c.id = data)) {
          return c.nom;
        }
      });
    },

    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 21.25rem;
  .card-img {
    height: 22.5rem;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      transform: scale(0.75);
    }
  }
}
.fa-star {
  color: rgb(248, 175, 4);
}
</style>