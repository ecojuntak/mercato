<template>
    <div class="card globalcard">
    <div class="card-header">
      <div class="row">
        <div class="col-12 col-md-4">
          <h5>Alamat Pengiriman</h5>
        </div>
        <div class="col-md-4 col-12">
            <!-- <select v-model="address" class="form-control form-control-sm" @change="publishAddressChoosenEvent">
            <option v-for="address in addresses" :value="JSON.parse(address)"> {{ JSON.parse(address).name }}</option>
          </select> -->
          <select class="form-control form-control-sm">
            <option > opt 1</option>
          </select>
        </div>
        <div class="col-md-4 col-12">
          <button
            class="btn btn-sm btn-outline-primary float-right mt-1"
            
          >Tambah Alamat</button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="font-weight-bold">Pembeli
        <br>
        <i class="fa fa-phone mr-2"></i>Cantact Pembeli</div>
      <div>
        <ul>
          <div class="mt-2" v-if="address != null">
            <b>Dikirim ke Alamat </b> <br>
            <li> {{ address.subdistrict_name }} {{ ", " + address.city_name }} {{ ", " + address.province_name }}</li>
            <li> Kode Pos {{ address.postal_code }} </li>
            <b> Alamat Rinci</b> <br>
            <li> {{ address.detail }} </li>
          </div>
        </ul>
      </div>
    </div>
    <NewAddress v-if="showModal" v-bind:user-id="userId"/>
  </div>
</template>

<script>
import NewAddress from '@/components/Customer/Shipment/NewAddress'
export default {
    components:{
        NewAddress
    },
    data(){
        return{
            showNewAddress:false,
            addresses:[],
            address:null,
            buyer:{}
        }
    }
}
</script>

