import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 1000,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('api_key')
    }
  })
}
