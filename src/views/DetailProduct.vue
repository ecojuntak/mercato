<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12">
        <div class="card globalcard">
          <div class="card-body">
            <div class="row">
              <div class="col-md-5">
                <div class="detailproduct">
                  <div class="row">
                    <div class="col-md-2 pr-0 smallimageholder">
                      <ul class="nav nav-pills nav-justified smallimage">
                        <!--@foreach (json_decode($product->images) as $idx => $image) @if ($loop->first)-->
                        <!--<li class="mb-2" data-target="#myCarousel" data-slide-to="{{ $idx }}" class="active">-->
                        <!--<img src="{{ '/images/' . $image }}" alt="">-->
                        <!--</li>-->
                        <!--@else-->
                        <!--<li class="mb-2" data-target="#myCarousel" data-slide-to="{{ $idx }}">-->
                        <!--<img src="{{ '/images/' . $image }}" alt="">-->
                        <!--</li>-->
                        <!--@endif @endforeach-->
                      </ul>
                    </div>
                    <div class="imagesliderholder col-md-10 ml-0">
                      <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <!--@foreach (json_decode($product->images) as $image) @if ($loop->first)-->
                          <!--<div class="carousel-item active">-->
                          <!--<img class="align-self-center" src="{{ '/images/' . $image }}" alt="">-->
                          <!--</div>-->
                          <!--@else-->
                          <!--<div class="carousel-item">-->
                          <!--<img src="{{ '/images/' . $image }}">-->
                          <!--</div>-->
                          <!--@endif @endforeach-->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <button
                  type="button"
                  class="badge custom-badge font-weight-light"
                  data-toggle="test"
                  data-rigger="focus"
                  data-content="<b><a href='single-blog.html'>Klik disini</a></b>  untuk informasi selebihnya "
                  data-html="true"
                  title="Dibuat dengan  "
                >Kategori Produk</button>

                <h2 class="mb-0">Nama Produk</h2>
                <p>0 Ulasan</p>

                <h4 class="product-price" style="color: orange">Rp {{formatPrice(34567890)}}</h4>
                <p class="product-desc">Deskripsi</p>
                <p class="product-desc">Produk ini dibuat dengan metode</p>
                <div class="row mb-3">
                  <div class="col-12" style="display:inline">
                    <div class="mr-3" style="display:inline-block!important">
                      <div class="text-muted" style="font-size:11px">Berat</div>
                      <div style="font-size:14px; font-weight: 700">1kg</div>
                    </div>
                    <div style="display:inline-block!important">
                      <div class="text-muted" style="font-size:11px">Ukuran</div>
                      <div style="font-size:14px; font-weight: 700">1m x 3m</div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-4 col-md-3 col-lg-3"
                    style="display: flex;
                                             align-items: center;
                                            "
                  >
                    <img
                      src="https://img.icons8.com/wired/50/000000/product.png"
                      style="height:25px; margin-right:4px"
                    >
                    <div class style="display:inline-block!important">
                      <div class="text-muted" style="font-size:11px">Kondisi</div>
                      <div style="font-size:14px; font-weight: 700">Baru</div>
                    </div>
                  </div>
                  <div
                    class="col-4 col-md-3 col-lg-3"
                    style="display: flex;
                                             align-items: center;
                                            "
                  >
                    <img
                      src="https://img.icons8.com/wired/50/000000/sell-stock.png"
                      style="height:25px;margin-right:4px"
                    >
                    <div class style="display:inline-block!important">
                      <div class="text-muted" style="font-size:11px">Terjual</div>
                      <div style="font-size:14px; font-weight: 700">0</div>
                    </div>
                  </div>
                  <div
                    class="col-4 col-md-3 col-lg-3"
                    style="display: flex;
                                             align-items: center;
                                            "
                  >
                    <img
                      img
                      src="https://img.icons8.com/wired/50/000000/shopping-cart-loaded.png"
                      style="height:25px;margin-right:4px"
                    >
                    <div class style="display:inline-block!important">
                      <div class="text-muted" style="font-size:11px">Min. Beli</div>
                      <div style="font-size:14px; font-weight: 700">1</div>
                    </div>
                  </div>
                </div>

                <!--@role('merchant')-->
                <!--<div class="cart-fav-box d-flex align-items-center mt-4">-->
                <!--<a href="{{ url('/products/edit', $product->id) }}" class="btn essence-btn">Edit</a>-->
                <!--<form action="{{ url('/products/delete', $product->id)}}" method="POST">-->
                <!--{{ csrf_field() }}-->
                <!--<button type="submit" class="btn essence-btn ml-4">Delete</button>-->
                <!--</form>-->
                <!--</div>-->
                <!--@else @if(Auth::check())-->
                <!--<div id="add-to-cart-button">-->
                <!--<add-to-cart-button :max-unit="{{$product->stock}}" :user-id="{{Auth::user()->id}}" :product-id="{{$product->id}}" />-->
                <!--</div>-->
                <!--@else-->
                <div>
                  <button
                    class="btn essence-btn mt-4"
                    data-toggle="modal"
                    data-target="#loginModal"
                  >Pesan Barang</button>
                </div>
                <!--@endif @endrole-->
              </div>
              <div class="col-md-2 d-none d-md-block">
                <div class="card">
                  <div class="card-body" style="text-align:center">
                    <small class="mb-3">Dijual Oleh</small>
                    <div
                      class="imgwrapper"
                      style="padding: 0px; width:100%; text-align:center;height:auto"
                    >
                      <img
                        src="@/static/img/placeholder/inspirasi_2.png"
                        alt="image"
                        style="height:auto"
                      >
                    </div>
                    <h6 style="color:green; font-weight:bolder" class="mt-2">Nanda Ulos</h6>
                    <div class="text-muted">
                      <i class="fas fa-map-marker-alt" style="font-size:medium"></i> Balige, TobaSamosir
                    </div>
                  </div>
                  <div class="card-footer">
                    <small>Transaksi Berhasil</small><br>
                    <b>1 Transaksi</b> <br>
                    <div class="mt-2">
<small class="mt-2">Dukungan Pengiriman</small>
                    <img src="@/static/icon/jne.png" alt="" style="height:32px">
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="mt-5 detailreview">
                <div class="col-md-12">
                  <!-- Nav tabs -->
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <i class="far fa-list-alt mr-2"></i>
                        <span>Deskripsi</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <i class="far fa-thumbs-up mr-2"></i>
                        <span>Ulasan</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content mt-3" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >deskripsi produk</div>

                    <div
                      class="tab-pane fade ulasan"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <!--@if($product->review->count() === 0)-->
                      <!--<div class="text-sm-center">-->
                      <!--<img src="" alt="">-->
                      <!--<b>Belum ada ulasan untuk produk ini</b>-->
                      <!--<p>Jadilah yang pertama membeli produk ini dan memberikan ulasan</p>-->
                      <!--</div>-->
                      <!--@else @foreach ($product->reviews as $review)-->
                      <div class="card mt-3">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-9">
                              Oleh
                              <b>nama reviewer</b>
                              <br>
                              <!--<small>{{ date_format($review->created_at,"l, d F Y, h:i:s") }}</small>-->
                              <small>tanggal</small>
                              <br>
                              <!--{{ $review->body }}-->
                              review
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--@endforeach @endif-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <ProductSlider :title="'Produk Serupa'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSlider from "@/components/Swipper/ProductSlider"
export default {
  
  name: "DetailProduct",
  components:{
    ProductSlider
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>

<style scoped>
</style>