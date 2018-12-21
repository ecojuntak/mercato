import api from '@/services/api'

export default {
  login(params) {
    return api().post('auth/login', {
      email: params.email,
      password: params.password
    });
  }
}