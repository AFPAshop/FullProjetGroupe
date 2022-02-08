<template>
  <div>
    <Products v-if="this.$store.state.conditionAffichageProduits == 1" />
    <Accueil v-if="this.$store.state.conditionAffichageProduits == null" />
  </div>
</template>

<script>
import Products from "../components/Products.vue";
import Accueil from "../components/Accueil.vue";

export default {
  name: "Home",
  components: { Products, Accueil },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    if (this.$store.state.user.userRole == 1) {
      this.$router.push("/admin/");
    }
  },
};
</script>

    