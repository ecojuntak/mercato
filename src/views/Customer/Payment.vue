<template>
  <div class="container">
    <div class="col-md-12 payment globalcard">
      <div class="row justify-content-md-center">
        <div class="card col-md-12">
          <div class="text-center mt-2">
            <h4>Terima Kasih, nama pembeli</h4>
          </div>
          <div class="row justify-content-md-center">
            <div class="card my-3 col-12 col-md-6 col-lg-6 time">
              
              <div class="card-body">
                <p
                  class="text-center"
                  style="font-size: small"
                >Segera selesaikan pembayaran Anda sebelum stok habis.</p>
                <h2
                  class="text-center"
                >1 Jam 2 Menit 04 Detik</h2>
                <p class="text-center" style="font-size: small" >
                  <i>(Sebelum Deadline)</i>
                </p>
              </div>
              <div class="card-body">
                <h2 class="text-center">Waktu Pembayaran Anda Sudah Habis</h2>
              </div>
            </div>
          </div>

          <div>
            <div class="row justify-content-md-center">
              <div class="card col-12 col-md-6 col-lg-6 my-3">
                <div class>
                  <div class="card-body">
                    <div class="text-muted">Transfer pembayaran ke nomor Virtual Account :</div>
                    <img src="/images/assets/BRI.png" style="height: 30px; display: inline" alt>
                    <h4 style="display: inline">031401003328537</h4>
                    <br>a/n Anggiat Saut Parulian
                    <div class="mt-3 text-muted">Jumlah yang harus dibayar :</div>
                    <h5 style="color: #ff5205">Rp Total Bayar</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-md-center">
              <div class="card col-12 col-md-6 col-lg-6 my-3">
                <div>
                  <div class="card-body">
                    <div class="text-muted mb-2">Upload Bukti Pembayaran</div>
                    <button
                      type="button"
                      class="btn btn-block btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >Upload Bukti Pembayaran</button>
                    <!-- Modal -->
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Upload Bukti Bayar</h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="form-group">
                                <label for="namapengirim" class="small">Nama Pengirim</label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm"
                                  id="namapengirim"
                                  aria-describedby="emailHelp"
                                  placeholder="Nama Pengirim"
                                  v-model="senderName"
                                >
                              </div>
                              <div class="form-group">
                                <label for="utkbank" class="small">Bank Tujuan</label>
                                <br>
                                <select id="utkbank" class="form-control" v-model="selectedBank">
                                  <option value="BRI">BRI</option>
                                  <option value="MANDIRI">MANDIRI</option>
                                  <option value="BNI">BNI</option>
                                  <option value="BCA">BCA</option>
                                </select>
                              </div>
                              <br>
                              <div class="form-group">
                                <label class="col-form-label">Bukti Pembayaran</label>
                                <div class="col-sm-9">
                                  <div class="upload-btn-wrapper">
                                    <button class="btn-upcus" style="margin: auto" v-if="selectedFile === null">
                                      <img src="/images/assets/addimage.png" style="height: 100px">
                                      <input type="file" name="myfile" v-on:change="onFileChanged">
                                    </button>
                                    <div v-else>
                                      <button type="button" class="btn btn-danger btn-sm" v-on:click="selectedFile = null"> Ganti Gambar </button>
                                      <img id="uploaded_image" :src="image" />
                                    </div>
                                  </div>
                                  <small id class="form-text text-muted"></small>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-primary"
                              v-on:click="uploadProofOfPayment"
                            >Upload</button>
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