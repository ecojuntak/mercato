import api from '@/services/api'

export default {
  getCarousels () {
    return api().get('carousels');
  }
}