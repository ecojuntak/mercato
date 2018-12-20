<template>
    <div class="detailorder mt-2">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header" style="background-color: #f1f1f1">
              <div class="row text-muted">
                <div class="col-sm-3 small">ssssssDones</div>
                <div class="col-sm-3 small">Total pembayaran</div>
                <div class="col-sm-3 small">Status</div>
              </div>
              <div class="row detail">
                <div class="col-sm-3">2345</div>
                <div class="col-sm-3 bold" style="color: orangered">Rp73454</div>
                <div class="col-sm-6">
                  <div
                    class="alert alert-warning p-1"
                    role="alert"
                    style="font-size: x-small"
                  >Ditolak oleh Admin</div>

                  <div
                    class="alert alert-warning p-1"
                    role="alert"
                    style="font-size: x-small"
                  >Ditolak oleh Penjual</div>

                  <div
                    class="alert alert-warning p-1"
                    role="alert"
                    style="font-size: x-small"
                  >Ditolak oleh Admin karena bukti pembayaran tidak valid</div>

                  <div
                    class="alert alert-warning p-1"
                    role="alert"
                    style="font-size: x-small"
                  >Tidak melakukan pembayaran melewati batas waktu pembayaran</div>

                  <div
                    class="alert alert-warning p-1"
                    role="alert"
                    style="font-size: x-small"
                  >Transaksi Sukses</div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row singleorderprod" style=" padding-bottom: 10px">
                <div class="col-md-12 col-sm-12 col-xs-6">
                  <div class="row">
                    <a href=" ">
                      <div class="col-sm-2 col-xs-12">
                        <div class="imgwrapper pesanan" style="padding: 0px; height: auto">
                          <img src="@/static/img/placeholder/inspirasi_1.png" alt="Card image cap">
                        </div>
                      </div>
                      <div class="col-sm-6 col-xs-12">
                        <div class="keranjang-desc-prod">
                          <h6>ulos abc</h6>
                          <h6 style="color: #FF5205; display: inline;">Rp 152.3452</h6>
                          <br>
                          <small>Jumlah</small>
                        </div>
                      </div>
                    </a>
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
export default {};
</script>
