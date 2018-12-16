<template>
  <div class="registration">
    <spinner> </spinner>
    <div class>
      <div class="row">
        <div class="col-md-12">
          <form>
            <label class="label text-muted">Pemilik Toko (Merchant)</label>
            <br>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label class="label">Username Merchant</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                   
                    placeholder
                    required
                  >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="label">E-mail Merchant</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    
                    required
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="label">Phone</label>
              <input
                type="text"
                class="form-control form-control-sm"
               
                required
              >
            </div>
            <div class="form-group mt">
              <label class="label">Gender</label>
              <br>

              <label form="male">
                <input
                  type="radio"
                  id="male"
                  value="Male"
                  class="form-control form-control-sm"
                  
                >Male
              </label>
              <label form="female">
                <input
                  type="radio"
                  id="female"
                  value="Female"
                  class="form-control form-control-sm"
                  
                >Female
              </label>
            </div>
            <div class="form-group">
              <label class="label">Birthday</label>
              <input
                type="date"
                class="form-control form-control-sm"
                
                required
              >
            </div>

            <div class="form-group">
              <label class="label">Nama Toko</label>
              <input
                type="text"
                class="form-control form-control-sm"
                
                required
              >
            </div>
            <label class="label text-muted">Alamat Toko</label>
            <br>
            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <label class="label">Provinsi</label>
                  <select
                    class="form-control form-control-sm"
                    
                  >
                    <option>opt1</option>
                  </select>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label class="label">Kabupaten</label>
                  <select
                    class="form-control form-control-sm"
                   
                  >
                    <option>opt1</option>
                  </select>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label class="label">Kecamatan</label>
                  <select
                    class="form-control form-control-sm"
                   
                  >
                    <option>opt1</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="label">Alamat Rinci</label>
              <textarea
                
                class="form-control form-control-sm"
                rows="3"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="label">Password</label>
              <input
                type="password"
                class="form-control form-control-sm"
               
                required
              >
            </div>

            <div class="form-group">
              <label class="label">Confirm Password</label>
              <input
                type="password"
                class="form-control form-control-sm"
                
                required
              >
            </div>
            <button
              type="button"
              class="btn essence-btn btn-block"
            
            >Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>
