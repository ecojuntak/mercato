<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card globalcard store">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-3 col-sm-3 d-none d-sm-block store-image px-0">
                <div class="imgwrapper">
                  <img src="@/static/img/placeholder/inspirasi_1.png" alt="Card image cap">
                </div>
              </div>
              <div class="col-md-9 col-sm-12 store-name pl-0">
                <div class="row">
                  <div class="col-10 col-sm-8 col-md-10">
                    <h5 class="mb-0">Nama Toko</h5>
                  </div>
                  <div class="col-2">
                    <button type="submit" class="btn btn-primary btn-sm float-right">
                      <i class="fa fa-gear"></i> Edit
                    </button>
                  </div>
                </div>

                <p>Horas Mamangke Mangomo Partiga-tiga</p>

                <div class="store-desc">
                  <i class="fa fa-map mr-1"></i>
                  Alamat Toko
                  <br>
                  <i class="fa fa-clock-o mr-1"></i>
                  Tangal Bergabung
                </div>
                <div class="col-12 mt-3">
                  <div class="row">
                    <div
                      class="card col-lg-2 col-5 mr-1 widget"
                      style="border-left: 4px solid #2aacca;"
                    >
                      <div class="card-body p-1">
                        <small>Produk Terjual</small>
                        <br>
                        <h4>2</h4>
                      </div>
                    </div>
                    <div class="card col-lg-3 col-6 widget" style="border-left: 4px solid #ca4665;">
                      <div class="card-body p-1">
                        <small>Total Penjualan</small>
                        <br>
                        <span>Rp.1,001,021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--menu-store-->
    <div class="row">
      <!--sidebar-->
    <SideBar/> 
      <!--//sidebar-->
      <!--content-->
    <Products/>
        <!-- <AllProduct/> -->
      
      </div>
    </div>
  
</template>

<script>
import SideBar from '@/components/Merchant/SideBar'
import Products from '@/components/Merchant/ProductList'
export default {
    components:{
        SideBar, Products
    }
};
</script>

