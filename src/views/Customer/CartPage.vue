<template>
  <div class="col-md-12 keranjang">
    <div class="card globalcard" style="min-height: 400px">
      <div v-if="productsInCart.length === 0">
        <div class="col-12 text-center mt-3">
          <img
            src="@/static/img/placeholder/empty_cart.png"
            style="height: 120px; border: none; opacity: 0.5"
          >
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
            <div class="row" v-for="detail in productsInCart">
              <div class="col-md-6 col-sm-12 col-xs-6">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div class="imgwrapper" style="padding: 0px">
                      <router-link to="/detail">
                        <img :src="assetServerURL + detail.product.images[0]" alt="Card image cap">
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-8 col-sm-6 col-xs-12">
                    <div class="keranjang-desc-prod">
                      {{ detail.product.description }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-6">
                <div class="keranjang-price-prod h5" style="color: #ff8415">Rp {{ formatPrice(detail.product.price) }}</div>
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
                    :value="detail.quantity"
                  >
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    style="border-top-left-radius: 0px; border-bottom-left-radius: 0px; left: -10px;"
                  >+</button>
                </div>
                <button type="button" class="btn btn-outline-warning btn-sm mt-2">
                  <span v-on:click="deleteProduct(detail.id)">
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
                <h5>Rp. {{ formatPrice(totalCost()) }}</h5>
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
import cartService from "@/services/cart-service";

export default {
  data() {
    return {
      productsInCart: [],
      assetServerURL: process.env.VUE_APP_ASSET_SERVER_BASE_URL + "products/"
    };
  },
  methods: {
    getProductInCart() {
      cartService
        .getProductInCart()
        .then(res => {
          this.productsInCart = res.data.cart.details;
          console.log(this.productsInCart)
        })
        .catch(err => {
          console.log(err)
        });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    totalCost(){
      let total = 0;
      this.productsInCart.forEach(detail => {
        total += parseInt(detail.quantity * detail.product.price)
      })
      
      return total
    },
    deleteProduct(id) {
      console.log(id)
    }
  },
  mounted() {
    this.getProductInCart();
  }
};
</script>

