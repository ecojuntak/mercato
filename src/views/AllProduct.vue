<template>
<div class="container">
    <div class="row discovery">
      <div class="col-md-2 col-lg-2 d-sm-block left" style="">
        <div class="">
          <div class="card globalcard">
            <div class="">
              <nav
                  class="navbar navbar-expand-lg mproduct p-1"
                  style="background-color: transparent; border:none">
                <h5 class="mr-3 d-block d-lg-none d-md-none">Filter Produk</h5>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
            <span>
              <i class="material-icons">apps</i>
            </span>
                </button>
                <br>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav flex-column mr-auto mt-2 mt-lg-0 p-1">
                    <li data-toggle="collapse" data-target="#produk">
                      <a>Metode Pembuatan</a>
                      <ul class="sub-menu collapse show" id="produk">
                        <li><a
                            class="dropdown-item"
                            @click="filterProductByCategory('ATBM')"
                        >Alat Tenun Bukan Mesin</a></li>
                        <li><a
                            class="dropdown-item"
                            @click="filterProductByCategory('Tradisional')"
                        >Tradisional</a></li>
                        <li> <a class="dropdown-item" @click="filterProductByCategory('Mesin')">Mesin</a></li>
                        <li><div class="dropdown-divider"></div>
                          <a class="dropdown-item" @click="filterProductByCategory('')">Semua Metode</a></li>
                      </ul>
                    </li>
                    <li>
                      <a
                          class="nav-link dropdown-toggle"
                          id="navbarDropdown1"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">Urutkan Berdasarkan</a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                        <a class="dropdown-item" @click="sortProductByName('asc')">Nama A-Z</a>
                        <a class="dropdown-item" @click="sortProductByName('des')">Nama Z-A</a>
                        <a class="dropdown-item" @click="sortProductByPrice('asc')">Harga Termurah</a>
                        <a class="dropdown-item" @click="sortProductByPrice('des')">Harga Termahal</a>
                      </div>
                    </li>
                    <li>
                      <form class="form-inline my-2 my-lg-0">
                        <input
                            class="form-control form-control-sm mr-sm-2"
                            type="search"
                            placeholder="Filter Nama"
                            aria-label="Search"
                            v-model="searchName"
                            @input="filterProductByName"
                        >
                      </form>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    <!--<div class="col-md-9 card globalcard " style="min-height: 400px">-->
      <div class="card globalcard right" style="min-height: 400px; ">
        <div class="card-header pb-0" style="border-bottom:none ">

          <nav class="navbar navbar-expand-lg mproduct p-1 d-none d-md-block d-lg-block" style="background-color: transparent; border:none">

            <div class="collapse navbar-collapse">
              <span class="text-muted mr-1">Ditemukan 000 produk dari hasil pencarian </span><span style="color: darkred; font-weight: bold"> "Ulos"</span>
                  <a
                      class="nav-link dropdown-toggle ml-auto"
                      id="Sort"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style="cursor: pointer;"
                  >Urutkan Berdasarkan</a>
                  <div class="dropdown-menu" aria-labelledby="Sort" style="left: 33em; cursor: pointer" >
                    <a class="dropdown-item" @click="sortProductByName('asc')">Nama A-Z</a>
                    <a class="dropdown-item" @click="sortProductByName('des')">Nama Z-A</a>
                    <a class="dropdown-item" @click="sortProductByPrice('asc')">Harga Termurah</a>
                    <a class="dropdown-item" @click="sortProductByPrice('des')">Harga Termahal</a>
                  </div>
              <form class="form-inline my-2 my-lg-0 float-right ">
                <input
                    class="form-control form-control-sm mr-2 mr-lg-0 mr-md-0"
                    type="search"
                    placeholder="Filter Nama"
                    aria-label="Search"
                    v-model="searchName"
                    @input="filterProductByName"
                >
              </form>
            </div>
          </nav>



        </div>
      <div class="card-body">
        <div class>
          <div class="row">
            <div class="col-lg  col-6 px-1" v-for="product in products">
              <product-card
                :id="product.id"
                :name="product.name"
                :price="product.price"
                :image="product.images[0]"
                :merchant="product.merchant.username"
                class="mb-lg-4 mb-2"
              />
            </div>
          </div>
        </div>

        <!--<div  class="col-12 center center-block align-center text-center">-->
        <!--<img src="/images/assets/search_result_empty.png" style="height: 120px; border: none; opacity: 0.5"/>-->
        <!--<p class="text font-bold">-->
        <!--<br>-->
        <!--Oops, produk tidak ditemukan :(-->
        <!--</p>-->
        <!--<div class="btn essence-btn " id="searchagain">Lakukan Pencarian Baru</div>-->
        <!--</div>-->
      </div>
    </div>
    </div>
</div>
</template>

<script>
import productService from "@/services/product-service";
import productCard from "@/components/ProductCard";

export default {
  name: "AllProduct",
  components: {
    productCard
  },
  data() {
    return {
      orginalProductsData: [],
      products: [],
      searchName: ""
    };
  },
  methods: {
    async getAllProducts() {
      await productService
        .getAllProducts()
        .then(res => {
          this.orginalProductsData = res.data.products;
          this.products = this.orginalProductsData;
        })
        .catch(err => {
          console.log(err);
        });
    },
    filterProductByName() {
      this.products = this.orginalProductsData.filter(product =>
        product.name.toLowerCase().includes(this.searchName.toLowerCase())
      );
    },
    filterProductByCategory(category) {
      this.products = this.orginalProductsData.filter(product =>
        product.category.includes(category)
      );
    },
    sortProductByName(type) {
      if (type === "asc") {
        this.products = this.orginalProductsData.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
      } else {
        this.products = this.orginalProductsData.sort((a, b) => {
          return a.name < b.name ? 1 : -1;
        });
      }
    },
    sortProductByPrice(type) {
      if (type === "asc") {
        this.products = this.orginalProductsData.sort((a, b) => {
          return parseInt(a.price) > parseInt(b.price) ? 1 : -1;
        });
      } else {
        this.products = this.orginalProductsData.sort((a, b) => {
          return parseInt(a.price) > parseInt(b.price) ? 1 : -1;
        });
      }
    }
  },
  mounted() {
    this.getAllProducts();

  }
};


</script>

<style scoped>
</style>