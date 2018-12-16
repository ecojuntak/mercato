<template>
  <div class="registration">
    <spinner> </spinner>
    <div class>
      <div class="row">
        <div class="col-md-12">
          <form>
            <div class="row">
              <div class="col-6">
                <div :class="{ 'form-group form-group--error': $v.name.$error }">
                  <label class="label">Username</label>
                  <input
                    type="text"
                    class="form-control form-control-sm "
                    
                    v-model.trim="$v.name.$model"
                    
                  >
                  
                <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="label">E-mail</label>
                  <input
                    type="email"
                    class="form-control form-control-sm"
                  
                    required
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="label">Nama Lengkap</label>
              <input
                type="text"
                class="form-control form-control-sm"
              
                required
              >
            </div>
            <div class="form-group">
              <label class="label">Nomor Handphone</label>
              <input
                type="text"
                class="form-control form-control-sm"
            
                required
              >
            </div>

            <label class="label">Jenis Kelamin</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="male"
                value="Male"
              
              >
              <label class="form-check-label" for="male">Male</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="female"
                value="Female"
               
              >
              <label class="form-check-label" for="female">Female</label>
            </div>

            <div class="form-group mt-3">
              <label class="label">Nama Alamat</label>
              <input
                type="text"
                class="form-control form-control-sm"
                
                placeholder="Cth: Alamat Rumah / Alamat Kantor"
                required
              >
            </div>

            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <label class="label">Provinsi</label>
                  <select
                    class="form-control form-control-sm"
                  
                 
                  >
                    <option>option1</option>
                  </select>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label class="label">Kabupaten</label>
                  <select
                    class="form-control form-control-sm"
                
                  
                  >
                    <option>option1</option>
                  </select>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label class="label">Kecamatan</label>
                  <select
                    class="form-control form-control-sm"
                 
                  >
                    <option>option1</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="label">Alamat Rinci</label>
              <textarea
 
                class="form-control form-control-sm"
                rows="3"
                placeholder="Cth: Jalan Melati Nomor 23"
              ></textarea>
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
import  {required, minLength } from 'vuelidate/lib/validators'
export default {
    name:"regcustomer",
    data(){
        return{
            name:"",
        }
    },
    validations:{
        name:{
            required,
            minLength:minLength(3)
        }
    }
}
</script>
