<template>
  <div class="container">
    <div class="card">
      <div class="col-md-4">
        <h5>Detail Pemesanan</h5>
      </div>
    </div>
    <div class="card globalcard">
      <div class="card-header">
        <div class="row text-muted">
          <div class="col-md-3 small">Tanggal Transaksi</div>
          <div class="col-md-3 small">Total pembayaran</div>
          <div class="col-md-3 small">Status Pembayaran</div>
        </div>
        <div class="row detail mb-2">
          <div class="col-md-3 col-sm-1">312 231 1</div>
          <div
            class="col-sm-3 col-sm-1 bold"
            style="color: orangered"
          >Rp 5123123123</div>
          <div class="col-sm-2">Pembayaran diterima
            <br>
            <small>bank</small>
          </div>
        </div>
        <div class="mt-4">
          <div class="row text-muted">
            <div class="col-md-6 small">Alamat Pengiriman</div>
            <div class="col-md-3 small">Ringkasan Pembayaran</div>
          </div>

          <div class="row detail">
            <div class="col-md-6 small">ts</div>
            <div class="col-sm-3 small">
              <table class="table table-striped table-responsive-sm table-sm">
                <tbody>
                  <tr>
                    <th scope="row" class="light">Total belanja</th>
                    <td>Rp 1115134</td>
                  </tr>
                  <tr>
                    <th scope="row">Biaya Pengiriman</th>
                    <td>Rp 224223</td>
                  </tr>
                  <tr>
                    <th scope="row">Total Pembayaran</th>
                    <td>
                      <b>Rp 634234</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="detailorder mt-2">
        <div class="card-body">
         <div class="row singleorderprod mb-3" style="border-bottom: 1px #00000020 solid">
                <div class="col-md-12 mb-3">
                  <div class="row">
                    <div class="col-sm-3 col-xs-12">
                      <div class="imgwrapper detailpesanan" style="padding: 0px; height: auto">
                        <img
                          src=""
                          alt="Card image cap"
                        >
                      </div>
                    </div>
                    <div class="col-sm-5 col-xs-12">
                      <div class="keranjang-desc-prod">
                        <h6>12312</h6>
                        <h6 style="color: #FF5205; display: inline;">Rp 5153341</h6>
                        <small>/ unit</small>
                        <br>
                        <small>Jumlah 5</small>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <button
                        class="btn small smallbtn"
                        data-toggle="modal"
                        data-target="#tulisulasan"
                        style="width: 150px"
                        role="button"
                      >Tulis Ulasan</button>
                      <button
                        class="btn small smallbtn"
                        data-toggle="modal"
                        data-target="#tulisulasan"
                        style="width: 150px"
                        role="button"
                      >Lihat Ulasan</button>
                    </div>
                    <div
                      class="modal fade"
                      id="tulisulasan"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="modal-title"
                              id="exampleModalCenterTitle"
                            >Tulis Ulasan</h5>
                            <h5 class="modal-title" id="exampleModalCenterTitle">Ulasan Anda</h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">234</span>
                            </button>
                          </div>
                          <div class="modal-body row justify-content-md-center">
                            <div
                              
                            >Kami ingin melayani anda dengan lebih baik, silahkan beri penilaian pengalaman berbelanja Anda</div>
                            <div >Anda sudah memberikan review untuk produk dibawah ini</div>
                            <div class="col-md-10">
                              <div class="detailorder mt-2">
                                <div class="card">
                                  <div class="card-body">
                                    <div class="row singleorderprod" style=" padding-bottom: 10px">
                                      <div class="col-md-12">
                                        <div class="row">
                                          <div class="col-md-2">
                                            <div
                                              class="imgwrapper detailpesanan"
                                              style="padding: 0px; height: auto"
                                            >
                                              <img
                                                src=""
                                                alt="Card image cap"
                                                style="height: auto"
                                              >
                                            </div>
                                          </div>
                                          <div class="col-md-10">
                                            <div class="keranjang-desc-prod">
                                              <h6>hegerr</h6>
                                              <h6
                                                style="color: #FF5205; display: inline;"
                                              >Rp 124152</h6>
                                              <small>/unit</small>
                                              <br>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-12 mt-2">Komentar Anda:
                              <div class="form-group mt-2">
                                <textarea class="form-control"></textarea>
                                <textarea class="form-control" rows="3"></textarea>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                             
                              class="btn btn-primary btn-sm"
                            >Kirim Ulasan</button>
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
      sd
    </div>
  </div>
</template>
<script>
export default {
  name: "Tracking"
};
</script>
