<template>
  <div class="container">
    <div class="row">
      <SideBar/>
      <div class="col-md-9 card globalcard" style="display: grid">
        <div class="pull-right">
          <div class="card globalcard mt-0">
            <div class="card-header">
              <h6>Order Sedang di Proses</h6>
            </div>

            <div class>
              <div class="card-body" style="border-bottom: 1px #c5c5c5 solid; padding-bottom: 10px">
                <div class="row mt-2">
                  <div class="col-md-10 col-sm-12 col-xs-6">
                    <div>
                      <div class="col-lg-3 col-xs-12">
                        <div class="vimagewrapper" style="padding: 0px">
                          <img class="vimg" src alt="Card image cap">
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="keranjang-desc-prod">
                          <h6>sdasd</h6>
                          <h6 style="color: green;">Sudah dibayar</h6>
                          <h6 style="color: red;">Belum dibayar</h6>
                          <small>
                            <b>Jumlah :</b>
                            21
                            <br>
                            <b>Stok Anda :</b>
                            1
                          </small>
                        </div>
                        <div class="keranjang-desc-prod">
                          <small>Dikirim ke:
                            <br>asdqwe
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div class="quantity col-md-2">
                          <button
                              class="btn btn-success btn-sm mb-2"
                              style="display: block;"
                              data-toggle="modal"
                              data-target="#resiModal"
                          >no. Resi
                          </button>
                          <ResiModal/>
                          <button
                              class="btn btn-success btn-sm mb-2"
                              style="display: block; width: 90px"
                          >Terima
                          </button>
                          <button class="btn btn-danger btn-sm" style="width: 90px">Tolak</button>
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
    </div>
  </div>
</template>
<script>
    import SideBar from "@/components/Merchant/SideBar";
    import ResiModal from "@/components/Modal/UploadResi.vue";

    export default {
        components: {
            SideBar,
            ResiModal
        }
    };
</script>
