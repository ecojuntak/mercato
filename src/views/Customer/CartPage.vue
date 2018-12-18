<template>
  <div class="col-md-12 keranjang">
    <div class="card globalcard" style="min-height: 400px">
      <div v-if="productsInCart.length === 0">
        <div class="col-12 text-center mt-3">
          <img src="@/static/img/placeholder/empty_cart.png" style="height: 120px; border: none; opacity: 0.5" >
          <p class="text font-bold mt-3">Keranjang belanja Anda kosong,</p>
          <a href="/" class="btn essence-btn">Ayo Lanjut Berbelanja</a>
        </div>
      </div>

      <div v-else>
        <div class="card-header">
          <div class="row">
            <div class="col-5">
              <a href="/" role="button" class="btn btn-sm btn-outline-primary">Belanja lagi</a>
            </div>
            <div class="col-7">
              <h5>Keranjang Belanja</h5>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class>
            <!-- s<div class="row" v-for="cart in carts"> -->
            <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-6">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div class="imgwrapper" style="padding: 0px">
                      <router-link to="/detail">
                        <img src="@/static/img/placeholder/inspirasi_1.png" alt="Card image cap">
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-8 col-sm-6 col-xs-12">
                    <div class="keranjang-desc-prod">
                      <h6></h6>Detail Produk
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-6">
                <div class="keranjang-price-prod h5" style="color: #ff8415">Rp 12.921.2</div>
              </div>
              <div class="quantity col-5 col-md-2 col-xs-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value="1"
                  >
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    style="border-top-left-radius: 0px; border-bottom-left-radius: 0px; left: -10px;"
                  >+</button>
                </div>
                <button type="button" class="btn btn-outline-warning btn-sm mt-2">
                  <span>
                    <i class="fa fa-trash"></i> Hapus
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div class="card-footer mt-3">
            <div class="row justify-content-end">
              <div class="col-md-3 text-right">
                <h6>Total Bayar</h6>
                <h5>Rp. 102500.3</h5>
              </div>
            </div>
            <a href="/shipment" class="btn btn-primary float-right">Lanjut Pembayaran</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsInCart: [],
    }
  }
};
</script>

