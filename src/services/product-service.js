import privateApi from '@/services/private-api'

export default {
  getProductByMerchant () {
    return privateApi().get('merchant/products');
  }
}