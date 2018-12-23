<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-white bg-white fixed-top main">
      <div class="container custom-container">
        <button
          class="navbar-toggler mr-4"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i class="material-icons">menu</i>
          </span>
        </button>
        <a class="navbar-brand mr-5" href="/">
          <h5>UlosZone</h5>
        </a>
        
        <a
          class="nav-link d-none d-sm-block"
          href="https://medium.com/uloszone"
          rel="noopener noreferrer"
          target="_blank"
          style="font-weight: 400; font-size: 1rem;"
        >Blog</a>

        <div class="d-lg-none carticon">
          <CartIcon/>
        </div>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-start">
            <li class="nav-item d-lg-none dropdown">
              <div class="loginbutton">
                <div class="user-login-info align-content-end" v-if="isAuthenticated">
                  <a href="#">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="modal"
                      data-target="#loginModal"
                      style="color: black;text-decoration-line: unset; padding: 0"
                    >Masuk</button>
                  </a>
                </div>

                <div class="dropdown-menu" v-else>
                  <a
                    href="#"
                    class="dropdown-toggle active mr-4"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img width="25" src="/user-assets/img/core-img/user.svg" alt>
                  </a>
                  
                  <a class="dropdown-item" href="#">My Profile</a>
                </div>

                <div class="nav-link">
                  <button
                    type="submit "
                    class="btn nav-link pt-0"
                    style="background-color: white"
                  >Logout</button>
                </div>
              </div>
            </li>
          </ul>
          <div class="d-sm-none d-md-block d-lg-block search">
            <input type="text" class placeholder="asdasd">
          </div>
        </div>

        <div class="d-none d-lg-block" style="margin-right: 8rem">
          <div class="search-area">
            <form class="example" action="/search">
              <input type="text" placeholder="Cari Produk" name="search">
              <button type="submit">
                <i class="material-icons" style="font-size: 19px">search</i>
              </button>
            </form>
          </div>
        </div>

        <div id="cart-icon" class="d-none d-lg-block mr-3">
          <cart-icon/>
        </div>

        <div v-if="isAuthenticated">
          <a
            href="#"
            class="dropdown-toggle active mr-4"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <img width="25" src="/user-assets/img/core-img/user.svg" alt>
          </a>
          
          <a class="dropdown-item" href="#">My Profile</a>
        </div>

        <div class="loginbutton d-none d-lg-block" v-else>
          <div class="user-login-info align-content-end">
            <a href="#">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="modal"
                data-target="#loginModal"
                style="color: black;text-decoration-line: unset;"
              >Masuk</button>
            </a>
          </div>
          <LoginModal/>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import CartIcon from "@/components/Cart/CartIcon";
import LoginModal from "@/components/Modal/Login";
import mixin from '../../mixin'

export default {
  components: {
    CartIcon,
    LoginModal
  },
  name: "Header",
  data: function() {
    return {
      form: {
        email: "",
        password: ""
      },
      formLabelWidth: "120px",
      width: "90px"
    };
  },
  mixins: [mixin]
};
</script>

<style scoped>
</style>