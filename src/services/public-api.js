import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      'App-Token': process.env.VUE_APP_API_TOKEN
    }
  })
}
