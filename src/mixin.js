export default {
  methods:{
    isAuthenticated() {
      console.log(localStorage.getItem('api-key'))
      return localStorage.getItem('api-key') !== null ? true : false;
    }
  }
}