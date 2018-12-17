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

        <div id="cart-icon" class="d-lg-none">
          <cart-icon/>
        </div>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-start">
            <li class="nav-item d-lg-none dropdown">
              <div class="loginbutton">
                <div class="user-login-info align-content-end">
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

                <!--<a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button"-->
                <!--data-toggle="dropdown" style="font-size: 1rem">Profile</a>-->
                <div class="dropdown-menu">
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
                  <!--@auth-->
                  <!--<div class="user-login-info dropdown-item">-->
                  <!--<a href="{{ url('/customer/' . Auth::user()->id . '/orders' )}}">Pesanan</a>-->
                  <!--</div>-->
                  <!--@endauth-->
                </div>

                <form class="nav-link" method="POST" action>
                  <!--{{ csrf_field() }}-->
                  <button
                    type="submit "
                    class="btn nav-link pt-0"
                    style="background-color: white"
                  >Logout</button>
                </form>
                <!--@endguest-->
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
          <!--@if(Auth::check())-->
          <cart-icon/>
        </div>

        <!--<div class="user-login-info mr-2 d-none d-sm-block">-->
        <!--<a href="" style="font-weight: 400;-->
        <!--font-size: 1rem;">Pesanan</a>-->
        <!--</div>-->
        <div class="loginbutton d-none d-lg-block">
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

          <!--<div class="classynav p-0">-->
          <!--<div class="dropdown float-right">-->
          <!--<a href="#" class="dropdown-toggle active mr-4" data-toggle="dropdown" aria-haspopup="true"-->
          <!--aria-expanded="false" style="    display: inherit;">-->
          <!--<img width="25" src="/user-assets/img/core-img/user.svg" alt="">-->
          <!--</a>-->
          <!--<div class="user-menu dropdown-menu mt-2" style="border: 1px solid #e0e0e0; left: -70px;">-->
          <!--<ul class="dropdown">-->
          <!--<li>-->
          <!--<a class="nav-link" href="#">My Profile</a>-->
          <!--</li>-->
          <!--<li>-->
          <!--<form method="POST" action="">-->
          <!--<button type="submit" class="btn nav-link"-->
          <!--style="background-color: transparent;padding-left: 12px;">Logout-->
          <!--</button>-->
          <!--</form>-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
        </div>
      </div>
    </nav>
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
              style
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <h6 class="font-light" id="exampleModalLabel">Masuk ke Akun Anda</h6>
            <form>
              <div class="form-group">
                <!--<label for="recipient-name" class="col-form-label"></label>-->
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-envelope-o"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="email"
                    placeholder="Email"
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
                  >
                </div>
                <p class="lupas">
                  <a class="small" href style="color: black">Lupa Password?</a>
                </p>
              </div>
            </form>
          </div>
          <div class="modal-footer py-0" style="border: none">
            <button type="button" class="btn essence-btn btn-block" onclick="login()">Login</button>
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
  </header>
</template>

<script>
import CartIcon from "@/components/Cart/CartIcon";

export default {
  components: {
    CartIcon
  },
  name: "Header",
  data: function() {
    return {
      drawer: null,
      dialogFormVisible: false,
      form: {
        email: "",
        password: ""
      },
      formLabelWidth: "120px",
      width: "90px"
    };
  }
};
</script>

<style scoped>
</style>