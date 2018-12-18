import privateApi from '@/services/private-api'

export default {
  getProductByMerchant () {
    return privateApi().get('merchant/products');
  },
  getNewProduct() {
    return privateApi().get('new-products');
  }
}