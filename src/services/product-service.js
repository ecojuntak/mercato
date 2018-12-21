import api from '@/services/api'

export default {
  getProductByMerchant () {
    return api().get('merchant/products');
  },
  getNewProduct(param) {
    return api().get('new-products');
  },
  getAllProducts() {
    return api().get('all-products');
  },
  getProduct(params) {
    return api().get('products/' + params);
  }
}