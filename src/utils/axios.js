import axios from 'axios'

const fetchCustomer = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

export default fetchCustomer
