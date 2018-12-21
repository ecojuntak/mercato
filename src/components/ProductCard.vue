<template>
  <div class="card product" >
    <router-link :to="'/products/' + id ">
      <div class="imgwrapper" >
        <img :src="assetServerURL + image" >
      </div>
      <div class="card-body">
        <p class="card-title productname">{{ name }}</p>
        <h6 style="color: #ff5205">Rp {{ formatPrice(price) }}</h6>
        <p class="card-text float-right">
          <small class="text-muted">{{ merchant }}</small>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: ["image", "name", "price", "merchant", "id"],
  data() {
    return {
      assetServerURL:  this.assetServerURL = process.env.VUE_APP_ASSET_SERVER_BASE_URL + 'products/'
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>

<style>
</style>
