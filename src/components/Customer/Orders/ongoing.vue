<template>
    <div class="detailorder mt-2">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header" style="background-color: #f1f1f1">
              <div class="row text-muted">
                <div class="col-sm-3 small">asdasd</div>
                <div class="col-sm-3 small">Total pembayaran</div>
                <div class="col-sm-3 small">Status</div>
              </div>
              <div class="row detail">
                <div class="col-sm-3">02 12 1098</div>
                <div class="col-sm-3 bold" style="color: orangered">Rp Total Bayar</div>
                <div class="col-sm-6">
                  <div class="alert alert-warning p-1" role="alert" style="font-size: x-small">
                    Menunggu Pembayaran
                    <a href="/payment" class="alert-link">Upload bukti pembayaran</a>
                  </div>

                  <div class="alert alert-warning p-1" role="alert" style="font-size: x-small">
                    Barang dalam pengiriman
                    <a href="/track" class="alert-link">Lacak Pengiriman</a>
                  </div>

                  <div
                    class="alert alert-warning p-1"
                    role="alert"
                    style="font-size: x-small"
                  >Sudah diterima penjual</div>

                  <div
                    class="alert alert-warning p-1"
                    role="alert"
                    style="font-size: x-small"
                  >Sudah dibayar, menunggu diproses penjual</div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row singleorderprod" style=" padding-bottom: 10px">
                <div class="col-md-12 col-sm-12 col-xs-6">
                  <div class="row">
                    <div class="col-sm-2 col-xs-12">
                      <div class="imgwrapper pesanan" style="padding: 0px; height: auto">
                        <img src alt="Card image cap">
                      </div>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                      <div class="keranjang-desc-prod">
                        <h6>Ulos avc</h6>
                        <h6 style="color: #FF5205; display: inline;">Rp 61412</h6>
                        <br>
                        <small>Jumlah</small>
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
export default {};
</script>
