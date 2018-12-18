<template>
  <div class="card globalcard">
    <div class="card-header">
      <div class="row">
        <div class="col-12">
          <h5>Barang yang Anda Pesan</h5>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <!-- <div v-for="cart in carts" class="row mt-4 pb-1" style="border-bottom: 1px solid #00000020"> -->
    <div class="row mt-4 pb-1" style="border-bottom: 1px solid #00000020">
        <div class="col-md-9 col-sm-12 col-xs-6">
          <div class="row">
            <div class="col-lg-4 col-sm-6 col-xs-12">
              <!-- <a :href="'/products/' + cart.product.id" style="float: left;"> -->
              <a href="" style="float: left;">
                <div class="imgwrapper" style="padding: 0px">
                  <!-- <img :src="'/images/' + JSON.parse(cart.product.images)[0]" alt="Card image cap"> -->
                  <img src="@/static/img/placeholder/inspirasi_1.png" alt="Card image cap">
                </div>
              </a>
            </div>
            <div class="col-lg-7 col-sm-6 col-xs-12">
              <div class="mb-1"><h6>Nama Produk</h6></div>
              <div class="medium">
                <ul>
                  <li>
                    Jumlah :
                    <b>n buah</b>
                  </li>
                  <li>
                    Penjual :
                    <b>
                      Nama 
                      Alamat 
                    </b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="float-right h6" style="color: #ff8415">RpTotal harga</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'CartDetail'
}
</script>
