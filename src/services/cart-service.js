import api from '@/services/api'

export default {
  addToCart(params) {
    return api().post('customer/carts/create', {
      product_id: params.product_id,
      quantity: params.quantity
    });
  },
  getProductInCart() {
    return api().get('customer/carts')
  },
  deleteProduct(param) {
    return api().get('customer/carts/' + param.id + '/delete')
  }
}        