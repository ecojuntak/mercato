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
            <swiper-slide>
              <div class="card product ">
                <router-link to="/detail">
                  <div class="imgwrapper">
                    <img  src="@/static/img/placeholder/banner_register.gif" alt>
                  </div>
                  <div class="card-body">
                    <p class="card-title productname">ulos abc</p>
                    <h6 style="color: #ff5205">Rp a12312</h6>
                    <p class="card-text float-right">
                      <small class="text-muted">
                       
                        121212l
                      
                      </small>
                    </p>
                  </div>
                </router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <swiper-slide>
                <div class="card product ">
                  <div class="imgwrapper">
                    <img  src="@/static/img/placeholder/banner_register.gif" alt>
                  </div>
                  <div class="card-body">
                    <p class="card-title productname">ulos abc</p>
                    <h6 style="color: #ff5205">Rp a12312</h6>
                    <p class="card-text float-right">
                      <small class="text-muted">121212</small>
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper-slide>
            <swiper-slide>
              <swiper-slide>
                <div class="card product ">
                  <div class="imgwrapper">
                    <img  src="@/static/img/placeholder/banner_register.gif" alt>
                  </div>
                  <div class="card-body">
                    <p class="card-title productname">ulos abc</p>
                    <h6 style="color: #ff5205">Rp a12312</h6>
                    <p class="card-text float-right">
                      <small class="text-muted">121212</small>
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper-slide>
            <swiper-slide>
              <swiper-slide>
                <div class="card product ">
                  <div class="imgwrapper">
                    <img  src="@/static/img/placeholder/banner_register.gif" alt>
                  </div>
                  <div class="card-body">
                    <p class="card-title productname">ulos abc</p>
                    <h6 style="color: #ff5205">Rp a12312</h6>
                    <p class="card-text float-right">
                      <small class="text-muted">121212</small>
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper-slide>
            <swiper-slide>
              <swiper-slide>
                <div class="card product ">
                  <div class="imgwrapper">
                    <img  src="@/static/img/placeholder/banner_register.gif" alt>
                  </div>
                  <div class="card-body">
                    <p class="card-title productname">ulos abc</p>
                    <h6 style="color: #ff5205">Rp a12312</h6>
                    <p class="card-text float-right">
                      <small class="text-muted">121212</small>
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper-slide>
            <swiper-slide>
              <swiper-slide>
                <div class="card product ">
                  <div class="imgwrapper">
                    <img  src="@/static/img/placeholder/banner_register.gif" alt>
                  </div>
                  <div class="card-body">
                    <p class="card-title productname">ulos abc</p>
                    <h6 style="color: #ff5205">Rp a12312</h6>
                    <p class="card-text float-right">
                      <small class="text-muted">121212</small>
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper-slide>
            <swiper-slide>
              <swiper-slide>
                <div class="card product ">
                  <div class="imgwrapper">
                    <img  src="@/static/img/placeholder/banner_register.gif" alt>
                  </div>
                  <div class="card-body">
                    <p class="card-title productname">ulos abc</p>
                    <h6 style="color: #ff5205">Rp a12312</h6>
                    <p class="card-text float-right">
                      <small class="text-muted">121212</small>
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper-slide>
            <swiper-slide>
              <swiper-slide>
                <div class="card product ">
                  <div class="imgwrapper">
                    <img  src="@/static/img/placeholder/banner_register.gif" alt>
                  </div>
                  <div class="card-body">
                    <p class="card-title productname">ulos abc</p>
                    <h6 style="color: #ff5205">Rp a12312</h6>
                    <p class="card-text float-right">
                      <small class="text-muted">121212</small>
                    </p>
                  </div>
                </div>
              </swiper-slide>
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
    export default {
        props:["title"],
        components:{
            swiper, swiperSlide
        },
        name: "ProductSlider",
        data() {
            return {
                swiperOption: {

                    slidesPerView: '6',
                    spaceBetween: 10,
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
                            spaceBetween: 5
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

    // $(document).ready(function () {
    //     $('[data-toggle="test"]').popover({
    //         trigger: 'focus'
    //     });
    // });
</script>

<style scoped>

</style>