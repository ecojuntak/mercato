<template>
  <div class="row justify-content-center registration" style="min-height: 400px">
    <div class="col-md-6 col-sm-12">
      <div class="card m-3">
        <div class="card-header pb-0 text-center" style="background-color: white">
          <h4>Mendaftar sebagai</h4>
          <div class="row justify-content-md-center">
            <div class="col-md-5 col-sm-12 mt-3">
              <ul class="nav nav-tabs border-0 text-center" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active h6 mb-0"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >Pembeli</a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link h6 mb-0"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >Penjual</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div id="reg-customer">
                <regcustomer/> 
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div id="reg-merchant">
                <regmerchant/>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var $myGroup = $("#myGroup");
$myGroup.on("show.bs.collapse", ".collapse", function() {
  $myGroup.find(".collapse.show").collapse("hide");
});

import regcustomer from '@/components/Pages/Auth/Reg/RegCustomer';
import regmerchant from '@/components/Pages/Auth/Reg/RegMerchant';
export default {
  components:{
    regcustomer, regmerchant
  }
};
</script>
