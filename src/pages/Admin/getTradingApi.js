import axios from 'axios';


export default axios.create({
    baseURL: 'https://rtrading.thinkzyproducts.com:8006/',
    
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'token '+localStorage.getItem('token')
    },
  });