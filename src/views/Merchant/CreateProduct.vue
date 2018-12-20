<template>
  <div class="container">
    <div class="row">
      <SideBar/>
      <div class="col-md-9 crudproduk mt-3" style="display: grid">
        <div class="pull-right">
          <div class="card globalcard mt-0">
            <div class="card-header">
              <h6>Tambah Produk Baru</h6>
            </div>
            <div class="card-body">
              <form class="form-group" method="POST" enctype="multipart/form-data">
                <div class="form-group row">
                  <div class="input-group mb-3">
                    <label class="col-sm-3 col-form-label">
                      Gambar Produk
                      <span
                        class="formbadge badge badge-secondary font-weight-light text-muted"
                      >Wajib</span>
                    </label>
                    <div class="col-sm-9">
                      <div class="upload-btn-wrapper">
                        <button class="btn-upcus">
                        <img src="https://img.icons8.com/wired/64/000000/box.png" alt="">
                        </button>
                        <input id="files" name="images[]" multiple type="file">
                      </div>
                      <div id="result" class="row mt-4"></div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">
                    Nama Produk
                    <span
                      class="formbadge text-muted badge badge-secondary font-weight-light"
                    >Wajib</span>
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="namaprodukhelp"
                      name="name"
                    >
                    <small
                      id="namaprodukhelp"
                      class="form-text text-muted"
                    >Tulis nama produk sesuai jenis, merek, dan rincian produk.</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">
                    Harga Produk
                    <span
                      class="formbadge text-muted badge badge-secondary font-weight-light"
                    >Wajib</span>
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      aria-describedby="namaprodukhelp"
                      min="1"
                      name="price"
                      required
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">
                    Stock Produk
                    <span
                      class="formbadge text-muted badge badge-secondary font-weight-light"
                    >Wajib</span>
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      aria-describedby="namaprodukhelp"
                      min="1"
                      name="stock"
                      required
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">
                    Deskripsi Produk
                    <span
                      class="formbadge text-muted badge badge-secondary font-weight-light"
                    >Wajib</span>
                  </label>
                  <div class="col-sm-9">
                    <textarea
                      type="text"
                      rows="5"
                      class="form-control"
                      aria-describedby="namaprodukhelp"
                      name="description"
                    ></textarea>
                  </div>
                </div>
                <div class="mt-4">
                  <label class="label">Specification</label>
                  <div class="row">
                    <div class="col-12 col-md-4 col-lg-4">
                      <label class="label">Ukuran</label>
                      <input
                        class="form-control"
                        type="text"
                        name="dimention"
                        placeholder="Cth: 2m x 90cm"
                      >
                    </div>
                    <div class="col-12 col-md-4 col-lg-4">
                      <label class="label">Berat</label>
                      <input
                        class="form-control"
                        type="number"
                        min="1"
                        max="3"
                        name="weight"
                        aria-describedby="warnadasar"
                        placeholder="/kg"
                      >
                      
                      <small
                        id="warnadasar"
                        class="form-text text-muted"
                      >Berat digenapkan ke kilogram</small>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4">
                      <label class="label">Warna Dasar</label>
                      <select class="form-control" name="color" aria-describedby="warnadasar">
                        <option value="black">Hitam</option>
                        <option value="red">Merah</option>
                        <option value="blue">Biru</option>
                        <option value="blue">Putih</option>
                        <option value="blue">Ungu</option>
                        <option value="blue">Hijau</option>
                        <option value="blue">Cokelat</option>
                      </select>
                      <small
                        id="warnadasar"
                        class="form-text text-muted"
                      >Pilih warna yang paling dominan</small>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4 mt-4">
                      <label class="label">Kondisi Barang</label>
                      <select class="form-control" name="category">
                        <option value="Baru">Baru</option>
                        <option value="Bekas">Bekas</option>
                      </select>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4 mt-4">
                      <label class="label">Metode Pembuatan</label>
                      <select class="form-control" name="category">
                        <option value="ATBM">Alat Tenun Bukan Mesin</option>
                        <option value="Tradisional">Tradisional</option>
                        <option value="Mesin">Mesin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12 mt-4">
                    <button type="submit" class="btn btn-primary float-right">Tambah Barang</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Merchant/SideBar";
export default {
  name: "CreateProduct",
  components: {
    SideBar
  }
};
</script>

