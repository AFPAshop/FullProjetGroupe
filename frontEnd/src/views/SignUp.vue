<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-0 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Inscription</h2>
                <p class="text-white-50 mb-5">
                  Merci de bien vouloir renseigner tous les champs !
                </p>
                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeFirstNameX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX">Prénom</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeLastNameX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX">Nom</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                  />

                  <label class="form-label" for="typePasswordX"
                    >Mot de passe
                  </label>
                </div>

                <div class="form-outline form-white mb-4">
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
                        id="eye"
                        v-on:click="changer()"
                      ></i></div
                  ></span>
                </div>
                <router-link to="/" class="text-decoration-none">
                  <button
                    href="#"
                    class="btn btn-dark d-flex align-items-center"
                  >
                    <i class="fas fa-arrow-left mx-1"></i>
                    Back to Main Page
                  </button>
                </router-link>
                <button
                  class="inscription btn btn-outline-light btn-lg px-5"
                  type="submit"
                >
                  Inscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      e: true,
    };
  },
  mounted() {},
  methods: {
    changer() {
      if (this.e == true) {
        document.getElementById("typePasswordX").setAttribute("type", "text");
        document.getElementById("typePasswordX2").setAttribute("type", "text");
        document.getElementById("eye").setAttribute("class", "fa fa-eye-slash");
        this.e = false;
      } else {
        document
          .getElementById("typePasswordX")
          .setAttribute("type", "password");
        document
          .getElementById("typePasswordX2")
          .setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "fa fa-eye");
        this.e = true;
      }
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
  margin-top: 5px;
  font-size: 1.3em;
}
</style>