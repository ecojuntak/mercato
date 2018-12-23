<template>
  <div class="col-12">
    <div class="globalcard card">
      <div class="card-header">
        <h5 style="float: left"> {{ title }}</h5>
        <h6 style="float: right">
          <router-link to="/products">
            <a style="color: -webkit-link">Lihat semua produk</a>
          </router-link>
        </h6>
      </div>
      <div class="card-body globalcardbody">
        <div class="swiper-container">
          <swiper :options="swiperOption">
            <swiper-slide v-for="product in products" >
              <product-card
                :id="product.id"
                :name="product.name"
                :price="product.price"
                :image="product.images[0]"
                :merchant="product.merchant.username"
              />
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
import productCard from "@/components/ProductCard";
import productService from '@/services/product-service'

export default {
  props:["title"],
  components: {
    swiper, swiperSlide, productCard
  },
  name: "ProductSlider",
  data() {
    return {
      products: [],
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
      await productService.getNewProduct().then(res => {
        this.products = res.data.products
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style scoped>

</style>