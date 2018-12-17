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
import Address from '@/components/Shipment/Address'
import CartDetail from '@/components/Shipment/CartDetail'
import PaymentDetail from '@/components/Shipment/PaymentDetail'
export default {
    components:{
        Address, CartDetail, PaymentDetail
    }
}
</script>
