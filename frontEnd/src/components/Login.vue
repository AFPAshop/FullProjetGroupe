<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade bd-example-modal-lg"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <section class="vh-100 gradient-custom">
            <div class="container py-2 h-100">
              <div
                class="
                  row
                  d-flex
                  justify-content-center
                  align-items-center
                  h-100
                "
              >
                <div>
                  <div
                    class="card bg-dark text-white"
                    style="border-radius: 1rem"
                  >
                    <div class="card-body p-5 text-center">
                      <div class="mb-md-0 mt-md-4 pb-1">
                        <h2
                          v-if="affiche == 'login'"
                          class="fw-bold mb-2 text-uppercase"
                        >
                          Login
                        </h2>
                        <h2
                          v-if="affiche == 'signup'"
                          class="fw-bold mb-2 text-uppercase"
                        >
                          Inscription
                        </h2>
                        <p v-if="affiche == 'login'" class="text-white-50 mb-5">
                          Entrer votre login et votre mot de passe !
                        </p>
                        <p
                          v-if="affiche == 'signup'"
                          class="text-white-50 mb-5"
                        >
                          Merci de bien vouloir renseigner tous les champs !
                        </p>
                        <div
                          v-if="affiche == 'signup'"
                          class="form-outline form-white mb-4"
                        >
                          <input
                            v-model="prenom"
                            type="text"
                            id="typeFirstNameX"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="typeEmailX"
                            >Prénom</label
                          >
                        </div>
                        <div
                          v-if="affiche == 'signup'"
                          class="form-outline form-white mb-4"
                        >
                          <input
                            v-model="nom"
                            type="text"
                            id="typeLastNameX"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="typeEmailX">Nom</label>
                        </div>
                        <div
                          v-if="affiche == 'signup'"
                          class="form-outline form-white mb-4"
                        >
                          <input
                            v-model="tel"
                            type="text"
                            id="typeLastNameX"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="typeEmailX"
                            >Téléphone</label
                          >
                        </div>

                        <div class="form-outline form-white mb-4">
                          <input
                            v-model="email"
                            type="email"
                            id="typeEmailX"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="typeEmailX"
                            >Email</label
                          >
                        </div>
                        <div class="form-outline form-white mb-4">
                          <input
                            v-model="password"
                            type="password"
                            id="typePasswordX"
                            class="form-control form-control-lg"
                          />

                          <label class="form-label" for="typePasswordX"
                            >Mot de passe
                          </label>
                          <span
                            ><div class="password-icon">
                              <i
                                class="fa fa-eye"
                                aria-hidden="true"
                                id="eye"
                                v-on:click="changer()"
                              ></i></div
                          ></span>
                        </div>
                        <div
                          v-if="affiche == 'signup'"
                          class="form-outline form-white mb-4"
                        >
                          <input
                            type="password"
                            id="typePasswordX2"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="typePasswordX"
                            >Confirmation Mot de passe
                          </label>
                          <span
                            ><div class="password-icon">
                              <i
                                class="fa fa-eye"
                                id="eye2"
                                v-on:click="changer2()"
                              ></i></div
                          ></span>
                        </div>

                        <p v-if="affiche == 'login'" class="small mb-5 pb-lg-2">
                          <a class="text-white-50" href="#!"
                            >Mot de passe oublié ?</a
                          >
                        </p>
                        <button
                          v-if="affiche == 'login'"
                          class="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Login
                        </button>
                        <button
                          v-if="affiche == 'signup'"
                          @click="signUp"
                          class="inscription btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Inscription
                        </button>
                        <div
                          v-if="affiche == 'login'"
                          @click="login"
                          class="
                            d-flex
                            justify-content-center
                            text-center
                            mt-4
                            pt-1
                          "
                        >
                          <a href="#!" class="text-white">
                            <i class="fab fa-facebook-f fa-lg"></i>
                          </a>
                          <a href="#!" class="text-white"
                            ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                          ></a>
                          <a href="#!" class="text-white"
                            ><i class="fab fa-google fa-lg"></i
                          ></a>
                        </div>
                      </div>
                      <div v-if="affiche == 'login'">
                        <p class="mb-0">
                          Pas encore de compte ?
                          <!-- <router-link class="link-signup" to="/signup"
                            >Enregistrez-vous</router-link
                          > -->
                          <a href="#" @click="afficheSignUp"
                            >Enregistrez-vous</a
                          >
                        </p>
                      </div>
                      <div v-if="affiche == 'signup'">
                        <p class="mb-0">
                          Déjà un compte ?
                          <!-- <router-link class="link-signup" to="/signup"
                            >Enregistrez-vous</router-link
                          > -->
                          <a href="#" @click="afficheLogin">Connectez-vous</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      role: [],
      e: true,
      affiche: "login",
      email: "",
      password: "",
      nom: "",
      prenom: "",
      tel: "",
    };
  },
  mounted() {},

  methods: {
    // modification du type pour l'input "password"
    // et changement de la classe pour l'icone eye
    changer() {
      if (this.e == true) {
        document.getElementById("typePasswordX").setAttribute("type", "text");
        document.getElementById("eye").setAttribute("class", "fa fa-eye-slash");
        this.e = false;
      } else {
        document
          .getElementById("typePasswordX")
          .setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "fa fa-eye");
        this.e = true;
      }
    },
    // modification du type pour l'input (confirmation) "password"
    // et changement de la classe pour l'icone eye
    changer2() {
      if (this.e == true) {
        document.getElementById("typePasswordX2").setAttribute("type", "text");
        document
          .getElementById("eye2")
          .setAttribute("class", "fa fa-eye-slash");
        this.e = false;
      } else {
        document
          .getElementById("typePasswordX2")
          .setAttribute("type", "password");
        document.getElementById("eye2").setAttribute("class", "fa fa-eye");
        this.e = true;
      }
    },
    // affichage des composants pour le login
    afficheLogin() {
      this.affiche = "login";
    },
    // affichage des composants pour le signup
    afficheSignUp() {
      this.affiche = "signup";
    },
    login() {
      axios
        .post(this.$store.state.url + "/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push("/");
        })
        .catch((err) => {
          err;
        });
    },
    signUp() {
      axios
        .post(
          this.$store.state.url + "/user/create",
          {
            data: {
              nom: this.nom,
              prenom: this.prenom,
              email: this.email,
              password: this.password,
              tel: this.tel,
            },
          },
          {
            header: {},
          }
        )
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          error;
        });
      this.email = "";
      this.password = "";
      this.tel = "";
      this.prenom = "";
      this.nom = "";
      this.tel = "";
      this.affiche = "login";
    },
  },
};
</script>

<style scoped>
.modal-content {
  background-color: transparent;
  border: none;
}
.container {
  margin-top: 0px;
}
.password-icon {
  width: 50px;
  margin: auto;
}
.password-icon:hover {
  cursor: pointer;
  color: #ff4754;
  transform: scale(1.5);
}
label {
  background: #212529;
}
input {
  outline: 1px white solid;
}
input:focus {
  background: transparent;
  outline: 1px white solid;
  color: white;
}
.password-icon {
  margin-top: 0px;
}
</style>