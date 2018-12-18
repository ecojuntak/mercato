<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <div v-if="carousels.length === 0">
        <swiper-slide>
          <img alt="imgslider" src="@/static/img/placeholder/banner_register.gif">
        </swiper-slide>
        <swiper-slide>
          <img alt="imgslider" src="@/static/img/placeholder/banner_register.gif">
        </swiper-slide>
      </div>

      <div v-else>
        <swiper-slide v-for="carousel in carousels">
          <img alt="imgslider" :src="assetServerURL + carousel.image">
        </swiper-slide>
      </div>

        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide} from "vue-awesome-swiper";
import carouselService from '@/services/carousel-service';

export default {
  name: "Mainbanner",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        spaceBetween: 10,
        loop: true
      },
      carousels: [],
      assetServerURL:  this.assetServerURL = process.env.VUE_APP_ASSET_SERVER_BASE_URL + 'carousels/'
    };
  },
  methods: {
    async getCarousels() {
      await carouselService.getCarousels().then(res => {
        this.carousels = res.data.carousels
      }).catch(err => {
        console.log(err)
      })
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.getCarousels()
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

img {
  width: 100%;
  height: auto;
}

.swiper-container {
  width: 100%;
}
</style>