<template>
  <div
    class="modal fade loginmodal"
    id="loginModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-backdrop="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" style="margin: auto">Ulos Zone</h3>
          <button
            type="button"
            class="close p-0 m-0"
            data-dismiss="modal"
            aria-label="Close"
            @click="close"
            style
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <h6 class="font-light" id="exampleModalLabel">Masuk ke akun anda</h6>
          <form>
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="email"
                  placeholder="Email"
                  v-model="email"
                >
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  class="form-control form-control-sm"
                  id="password"
                  placeholder="Password"
                  v-model="password"
                >
              </div>
              <p class="lupa">
                <a class="small" href style="color: black">Lupa Password?</a>
              </p>
            </div>
          </form>
        </div>
        <div class="modal-footer py-0" style="border: none">
          <button type="button" class="btn essence-btn btn-block" @click="login">Login</button>
        </div>

        <div class="modal-footer border-0 justify-content-between px-5">
          <p>Belum punya akun?
            <router-link to="/register">
              <a href class style="font-weight: 800; color: #4b1815">Daftar disini</a>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '@/services/auth-service'

export default {
  name: "LoginModal",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async login() {
      await authService.login({
        email: this.email,
        password: this.password
      }).then(res => {
        localStorage.setItem('api-key', res.data.token)
        window.location.reload()
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

