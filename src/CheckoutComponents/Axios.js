import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-ecomm-dff12.cloudfunctions.net/api' //where api (cloud function) URL
})

export default instance

//https://us-central1-ecomm-dff12.cloudfunctions.net/api

//for local for debugging http://localhost:5001/ecomm-dff12/us-central1/api