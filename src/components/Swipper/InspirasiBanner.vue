<template>
  <div class="col-md-12 slide">
    <div class="card globalcard">
      <div class="card-header">
        <h5 style="float: left">Inspirasi Belanja</h5>
      </div>
      <div class="card-body" style="text-align: center;">
        <div class="flex">
          <div
              class="ab d-inline-flex"
              style=" min-width: 300px; width: 33%;padding:2px"
          >
            <a href="">
              <img src="@/static/img/placeholder/inspirasi_2.png" alt="image">
            </a>
          </div>
          <div
              class="ab d-inline-flex"
              style=" min-width: 300px; width: 33%;padding:2px"
          >
            <a href="">
              <img  src="@/static/img/placeholder/inspirasi_1.png" alt>
            </a>
          </div>
          <div
              class="ab d-inline-flex"
              style=" min-width: 300px; width: 33%;padding:2px"
          >
            <a href="">
              <img  src="@/static/img/placeholder/banner_template_3.png" alt>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
   
    export default {
        name: "InspirasiBelanja",
        props:["title"],
        components:{
            
            
        },
        data() {
            return {
                swiperOption: {
                    noSwiping:true,
                    slidesPerView: '3',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        // when window width is <= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is <= 480px
                        480: {
                            slidesPerView: '2',
                            spaceBetween: 10,
                        },
                        // when window width is <= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>