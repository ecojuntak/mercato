import privateApi from '@/services/private-api'

export default {
  getProductByMerchant () {
    return privateApi().get('merchant/products');
  },
  getNewProduct() {
    return privateApi().get('new-products');
  },
  getAllProducts() {
    return privateApi().get('all-products');
  },
  getProduct(params) {
    return privateApi().get('products/' + params);
  }
}