<template>
  <div class="mx-2" >
    <div>
      <TopBanner/>
    </div>
    <div>
      <ProductSlider :title="'Produk Terbaru'"/>
    </div>
    <div>
       <InspirasiBanner/>
    </div>

  </div>

</template>



<script>
  import TopBanner from "@/components/Swipper/Mainbanner"
  import ProductSlider from "@/components/Swipper/ProductSlider"
  import InspirasiBanner from "@/components/Swipper/InspirasiBanner"


    export default {
      components:{TopBanner, ProductSlider, InspirasiBanner},
        name: "Homepage"
    }
</script>

<style scoped>

</style>