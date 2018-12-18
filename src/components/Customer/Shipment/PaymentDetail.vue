<template>
  <div
    class="card shopsummary globalcard"
    style="position: -webkit-sticky; position: sticky; top: 6rem;    box-shadow: 0 1px 8px 0 rgba(0,0,0,.12);"
  >
    <div class="card-header">
      <h5>Ringkasan Belanja</h5>
    </div>
    <div class="card-body">
      <div>
        <div>
          <span>Total Harga Produk</span>
          <span
            class="float-right font-weight-bold"
          >Rp. Harga</span>
        </div>
        <div>
          <span>Total Ongkos Kirim</span>
          <span
            class="float-right font-weight-bold"
          >Rp. Ongkir</span>
        </div>
        <div style="border-bottom: 1px #b4b4b4 solid; margin: 10px 0px 10px 0px"></div>Total Pembayaran
        <div
          class="float-right h5"
          style="color: #ff8415"
        >Rp Total</div>
      </div>
      <div class="mt-5">
          <router-link to="/payment">
            <button
          class="btn essence-btn btn-block" to="/Payment">  Bayar</button>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'PaymentDetail'
}
</script>
