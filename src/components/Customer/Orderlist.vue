<template>
  <div class="col-12 col-md-9 col-lg-9">
    <div class="card globalcard breadcrumbcard card-body">
      <div class="row">
        <div class="col-md-4">
          <h5>Order</h5>
        </div>
      </div>
    </div>
    <div>
      <div class="card globalcard" style="min-height: 400px">
        <div class="card-header">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pesananbaru-tab"
                data-toggle="tab"
                href="#pesanansaatini"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >Pesanan Saat Ini</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="Konfirmasi-tab"
                data-toggle="tab"
                href="#konfirmasi"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >Pesanan Selesai</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="pesanansaatini"
              role="tabpanel"
              aria-labelledby="pesananbaru-tab"
            >
              <div class="detailorder mt-2">
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header" style="background-color: #f1f1f1">
                        <div class="row text-muted">
                          <div class="col-sm-3 small">Tanggal Pemesanan</div>
                          <div class="col-sm-3 small">Total pembayaran</div>
                          <div class="col-sm-3 small">Status</div>
                        </div>
                        <div class="row detail">
                          <div class="col-sm-3">02 12 1098</div>
                          <div class="col-sm-3 bold" style="color: orangered">Rp Total Bayar</div>
                          <div class="col-sm-6">
                            <div
                              class="alert alert-warning p-1"
                              role="alert"
                              style="font-size: x-small"
                            >
                              Menunggu Pembayaran
                              <a href="/payment" class="alert-link">Upload bukti pembayaran</a>
                            </div>

                            <div
                              class="alert alert-warning p-1"
                              role="alert"
                              style="font-size: x-small"
                            >
                              Barang dalam pengirima
                              <a href class="alert-link">Lacak Pengiriman</a>
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
            </div>

            <div
              class="tab-pane fade"
              id="konfirmasi"
              role="tabpanel"
              aria-labelledby="Konfirmasi-tab"
            >
              <div class="detailorder mt-2">
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header" style="background-color: #f1f1f1">
                        <div class="row text-muted">
                          <div class="col-sm-3 small">Tanggal Transaksi</div>
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
                                  <div
                                    class="imgwrapper pesanan"
                                    style="padding: 0px; height: auto"
                                  >
                                    <img
                                      src="@/static/img/placeholder/inspirasi_1.png"
                                      alt="Card image cap"
                                    >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderList"
};
</script>
