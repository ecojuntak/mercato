<template>
  <div class="checkout_area">
    <div class="container">
      <div class="row checkout">
        <div class="col-md-8">
          <Address />
          <CartDetail />
        </div>
        <div class="col-md-4">
          <PaymentDetail />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Address from '@/components/Customer/Shipment/Address'
import CartDetail from '@/components/Customer/Shipment/CartDetail'
import PaymentDetail from '@/components/Customer/Shipment/PaymentDetail'
export default {
    components:{
        Address, CartDetail, PaymentDetail
    }
}
</script>
