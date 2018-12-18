<template>
  <div class="col-12 col-md-12 col-lg-12">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header align-items-center border-0">
          <h5 class="modal-title font-light" id="exampleModalLabel">Tambah Alamat</h5>
          <button type="button" class="close" >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label class="label">Nama Alamat</label>
              <input type="text" class="form-control">
              <small id="namaalamat" class="form-text text-muted">
                Contoh: AlamatRumah, Kantor, Kampus
              </small>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="label">Provinsi</label>
                  <select class="form-control">
                    <option>province</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="label">Kota / Kabupaten</label>
                  <select class="form-control">
                    <option >op1</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="label">Kecamatan</label>
                  <select class="form-control">
                    <option>OPT1
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="label">Alamat Rinci</label>
              <textarea v-model="addressDetail" aria-describedby="alamatrinci" class="form-control" rows="3"
                        placeholder="Cantumkan patokan alamat, nama panggilan penerima, dan no. telp alternatif (contoh: Rumah sebelah minimarket 'Fruit Mart', panggilan penerima: Pak Budi, no. telp lain:  081234567890)."></textarea>
              <small id="alamatrinci" class="form-text text-muted"> Diisi dengan petunjuk lokasi untuk kurir</small>
            </div>
          </form>
        </div>
        <div class="modal-footer" style="border: none">
          <button type="button" class="btn btn-primary btn-block" v-on:click="addAddress">Tambah Alamat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'NewAddress'
}
</script>
