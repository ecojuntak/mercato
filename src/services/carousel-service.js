import publicApi from '@/services/public-api'

export default {
  getCarousels () {
    return publicApi().get('carousels');
  }
}