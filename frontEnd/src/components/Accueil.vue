<template>
  <div>
    <div class="container_banniere">
      <img src="https://fakeimg.pl/950x200/ff0000,128/000,255" />
    </div>
    <div class="row">
      <div class="container_adresse col col-4 mt-4">
        <h1>Adresse</h1>
        <GMapAutocomplete
          placeholder="This is a placeholder"
          @place_changed="setPlace"
        >
        </GMapAutocomplete>
        <GoogleMap class="google" />
      </div>
      <div class="col col-8">
        <h1 class="container_nom_commerce">{{ nom }}</h1>
        <div class="row">
          <div class="col col-4">
            <img src="https://fakeimg.pl/220x220/ff0000,128/000,255" />
          </div>
          <div class="container_description col col-8">
            <p>Ici petite description du commerce</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "./GoogleMap.vue";
import axios from "axios";
export default {
  name: "Accueil",
  components: {
    GoogleMap,
  },
  data() {
    return {
      nom: "",
    };
  },
  mounted() {
    axios.get(this.$store.state.url + "/getNameBdd").then((res) => {
      res.data.forEach((e) => {
        this.nom = e.name;
      });
    });
    if (this.$store.state.user.userRole == 1) {
      this.$router.push("/admin/");
    }
  },
  methods: {
    affichProduit() {
      this.$store.state.conditionAffichageProduits = 1;
    },
  },
};
</script>

<style>
.container_banniere {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.row {
  text-align: center;
}
.container_nom_commerce {
  margin: 45px auto;
}
.container_adresse {
  height: 500px;
  margin-top: 45px;
}
.google {
  height: 550px;
  margin-left: 25px;
}
.container_description {
  font-size: 1.5em;
  text-align: left;
}
</style>