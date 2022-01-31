<template>
  <router-link to="/admin" class="text-decoration-none">
    <a
      style="color: white"
      href="#"
      class="btn btn-dark d-flex align-items-center"
    >
      <i class="fas fa-arrow-left mx-1"></i>
      Retour page Admin
    </a>
  </router-link>
</template>

<script>
export default {
  name: "Retour",
};
</script>

<style scoped>
a {
  width: 15%;
  margin: 15px 30%;
}
</style>