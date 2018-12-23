<template>
  <div id="app">
    <Header/>
    <main style="min-height: 400px; position:relative;">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 13px;
}


</style>

<script>
import Header from "@/components/Layout/Header.vue";
import Footer from "@/components/Layout/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  data: function() {
    return { visible: false };
  }
};


</script>
