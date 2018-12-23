<template>
  <div class="col-12 col-md-9 col-lg-9">
    <div class="card globalcard breadcrumbcard card-body">
      <div class="row">
        <div class="col-md-4">
          <h5>Order</h5>
        </div>
      </div>
    </div>
    <div>
      <div class="card globalcard" style="min-height: 400px">
        <div class="card-header">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pesananbaru-tab"
                data-toggle="tab"
                href="#pesanansaatini"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >Pesanan Saat Ini</a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                id="Konfirmasi-tab"
                data-toggle="tab"
                href="#konfirmasi"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >Pesanan Selesai</a>
            </li>

          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="pesanansaatini" role="tabpanel" aria-labelledby="pesananbaru-tab">
                <ongoing/>
            </div>
            <div class="tab-pane fade" id="konfirmasi" role="tabpanel" aria-labelledby="Konfirmasi-tab">
             <done/> 
          </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ongoing from '@/components/Customer/Orders/ongoing'
import done from '@/components/Customer/Orders/done'
export default {
  name: "OrderList",
  components:{
    ongoing,done
  }
};
</script>
