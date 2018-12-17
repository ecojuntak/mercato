<template>
    <div class="col-md-3 col-lg-3 d-none d-sm-block">
  <div class="merchant-sidebar">
    <div class="card globalcard">
      <div class="card-body">
        <div class="mercant-sidebar-menu">
          <ul id="menu-content2" class="menu-content collapse show">
            <!-- Single Item -->
            <li data-toggle="collapse" data-target="#produk">
              <a >Produk</a>
              <ul class="sub-menu collapse show" id="produk">
                <li><a href="/merchant">Semua Produk</a></li>
                <li><a href="/createproduct">Tambah produk</a></li>
                <li><a href="/terjual">Produk terjual</a></li>
              </ul>
            </li>
            <!-- Single Item -->
            <li data-toggle="collapse" data-target="#pemesanan" class="collapsed">
              <a  >Pemesanan</a>
              <ul class="sub-menu collapse show" id="pemesanan">
                <li><a href="/newOrder">Order Masuk</a></li>
                <li><a href="/ongoingOrder">Order yang Sedang Diproses</a></li>
                <li><a href="">Order Berhasil</a></li>
                <li><a href="">Order Dibatalkan</a></li>
                <li><a href="">Order Gagal</a></li>
              </ul>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name:'SiderBar'
}
</script>

