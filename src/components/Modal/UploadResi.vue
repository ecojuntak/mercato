<template>
  <div
      class="modal fade"
      id="resiModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="inputResi">Nomor Resi</h5>
          <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="inputResi" class="small">Nomor Resi</label>
              <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Nomor Resi"
                  v-model="shippingNumber"
              >
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
              type="button"
              class="btn btn-primary"

          >Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UploadResi"
    }
</script>

<style scoped>

</style>