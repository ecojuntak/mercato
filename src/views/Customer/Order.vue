<template>
  <div class="row">
    <div class="col-md-3 col-lg-3">
      <div class="merchant-sidebar">
        <div class="card globalcard">
          <div class="card-body p-1">
            <div class="mercant-sidebar-menu">
              <div class="col-md-12 text-center">
                <div
                  class="imgwrapper mb-3"
                  style="padding: 0px;"
                ><img src="" alt="Card image cap" style="object-fit: scale-down"></div>
                <h6>Nama suser</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <OrderList/> 
  </div>
</template>
<script>
import OrderList from '@/components/Customer/Orderlist'
export default {
  name:'Order',
  components:{
    OrderList
  }
}
</script>

