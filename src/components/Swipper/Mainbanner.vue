<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img alt="imgslider" src="@/static/img/placeholder/banner_register.gif">
      </swiper-slide>
      <swiper-slide>
        <img alt="imgslider" src="@/static/img/placeholder/banner_register.gif">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide} from "vue-awesome-swiper";

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
      items: [{}]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
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