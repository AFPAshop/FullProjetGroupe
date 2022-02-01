<template>
  <div id="app">
    <form
      @submit.prevent="insererProduit"
      enctype="multipart/form-data"
      class="input creation"
    >
      <input
        v-model="nom_produit"
        class="form-control form-control-lg"
        type="text"
        name="nom_produit"
        placeholder="Entrez le nom du produit à ajouter"
        id="nom_produit"
        required
      />
      <div class="select">
        <input
          v-model="prix"
          class="form-control form-control-lg"
          type="text"
          name="prix"
          id="prix"
          placeholder="Entrez le prix"
          required
        />
        <input
          v-model="stock"
          class="form-control form-control-lg"
          type="text"
          name="stock"
          placeholder="Indiquez le stock"
          required
        />
      </div>
      <input
        type="file"
        ref="image"
        @change="onFileSelected"
        class="form-control form-control-lg"
        id="uploadImage"
        name="myPhoto"
      />
      <button @click="onFileSelected" class="btn btn-success">UpLoad</button>

      <img
        class="previewImage"
        id="uploadPreview"
        style="width: 200px; height: 200px"
      />

      <b-form-checkbox
        class="formCheckBox"
        size="lg"
        id="checkbox-1"
        v-model="checked"
        name="checkbox-1"
      >
        Ce produit à une date de limite de consommation ?
      </b-form-checkbox>

      <input
        v-if="checked == true"
        v-model="dlc"
        class="form-control form-control-lg"
        type="date"
        placeholder="Validité du produit"
        name="dlc"
        id="dlc"
      />
      <div class="select">
        <select
          v-model="id_TVA"
          class="form-control form-control-lg"
          name="tva"
          placeholder="Indiquez le taux de TVA"
          id="id_TVA"
        >
          <option value="">Select Taux TVA</option>
          <option v-for="t in this.$store.state.tva" :key="t.id" :value="t.id">
            {{ t.type }} %
          </option>
        </select>
        <select
          class="form-control form-control-lg"
          v-model="id_CATEGORIE"
          name="categorie"
          id="id_CATEGORIE"
        >
          <option value="">Select Catégorie</option>
          <option
            v-for="cat in this.$store.state.categories"
            :key="cat.id"
            :value="cat.id"
            description="Selectionner la catégorie du produit"
          >
            {{ cat.nom_categorie }}
          </option>
        </select>
      </div>
      <button
        class="inscription btn btn-outline-dark btn-lg px-5"
        type="submit"
      >
        Création Produit
      </button>
    </form>
    <Retour />
  </div>
</template>

<script>
import Retour from "../../components/RetourAdmin.vue";
import axios from "axios";
export default {
  components: { Retour },
  data() {
    return {
      nom_produit: "",
      image: "",
      prix: "",
      stock: "",
      dlc: "",
      id_TVA: "",
      id_CATEGORIE: "",
      selectedFile: "",
      checked: false,
      nameFile: "",
    };
  },
  getters() {},

  methods: {
    // OneSelect() {
    //   const file = this.$refs.image.files[0];
    //   this.selectedFile = file;
    //   console.log(this.selectedFile);
    // },
    async insererProduit() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.set("nom_produit", this.nom_produit);
      formData.set("prix", this.prix);
      formData.set("stock", this.stock);
      formData.set("dlc", this.dlc);
      formData.set("id_TVA", this.id_TVA);
      formData.set("id_CATEGORIE", this.id_CATEGORIE);
      console.log(formData);
      try {
        await axios.post(this.$store.state.url + "/product/create", formData);
        this.message = "Uploaded!!";
      } catch (err) {
        console.log(err);
        this.message = err.response.data.error;
      }
    },
    insererProduit2(even) {
      even.preventDefault();
      // const formData = new FormData();
      // formData.append("file", this.selectedFile);

      console.log(this.selectedFile);
      axios
        .post(this.$store.state.url + "/product/create", {
          nom_produit: this.nom_produit,
          file: this.selectedFile,
          prix: this.prix,
          stock: this.stock,
          dlc: this.dlc,
          id_TVA: this.id_TVA,
          id_CATEGORIE: this.id_CATEGORIE,
        })
        .then((req) => console.log(req.data))
        .catch((err) => console.log(err));
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      var oFReader = new FileReader();
      oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);
      oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
      };
    },
    dlcChecked() {
      this.checked = true;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 0 auto;
  label {
    margin: 15px auto;
  }
  input {
    margin: 0 auto;
    margin-top: 15px;
  }
  .select {
    display: flex;
    input {
      width: 33%;
    }
  }
  select {
    width: 33%;
    margin: 15px auto;
  }
  .submit {
    width: 20%;
    margin: 15px auto;
  }
  .previewImage {
    margin: 15px auto;
  }
}
</style>