<template>
  <div class="col-12">
    <div class="globalcard card">
      <div class="card-header">
        <h5 style="float: left"> {{ title }}</h5>
        <h6 style="float: right">
          <router-link to="/products">
            <a style="color: -webkit-link">Lihat Semua Produk</a>
          </router-link>
        </h6>
      </div>
      <div class="card-body globalcardbody">
        <div class="swiper-container">
          <swiper :options="swiperOption">
            <swiper-slide v-for="product in products">
              <div class="card product ">
                <router-link to="/products/detail">
                  <div class="imgwrapper">
                    <img :src="assetServerURL + product.images[0]">
                  </div>
                  <div class="card-body">
                    <p class="card-title productname"> {{ product.name}}</p>
                    <h6 style="color: #ff5205">Rp {{ product.price }}</h6>
                    <p class="card-text float-right">
                      <small class="text-muted"> 
                        {{ product.merchant.username }}
                      </small>
                    </p>
                  </div>
                </router-link>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import productService from '@/services/product-service'

export default {
  props:["title"],
  components:{
    swiper, swiperSlide
  },
  name: "ProductSlider",
  data() {
    return {
      products: [],
      assetServerURL: "",
      swiperOption: {
        slidesPerView: '6',
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: '2',
            spaceBetween: 5
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      }
    }
  },
  methods: {
    async getProducts() {
      productService.getNewProduct().then(res => {
        this.products = res.data.products
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getProducts()
    this.assetServerURL = process.env.VUE_APP_ASSET_SERVER_BASE_URL + 'products/'
  }
}
</script>

<style scoped>

</style>