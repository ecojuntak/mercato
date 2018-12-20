<template>
    <a href="/cart">
      <transition name="cart">
         <img src="@/static/icon/icons8-shopping-cart-64.png" style="height: 35px;margin-right:5px"/>   
        <!--<img src="/user-assets/img/core-img/bag.svg" style="width: 23px" v-if="show">-->
      </transition>
      <span style="display:inline-block;font-size: large;color: #4b1815;">0</span>
    </a>

</template>

<script>
    export default {
        name: "CartIcon"
    }
</script>

<style scoped>
  .cart-enter-active {
    animation: bounce-in 0.5s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
</style>