import axios from 'axios';


export default axios.create({
    baseURL: 'https://127.0.0.1:8000/trading/data/',
    
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'token a1c8c58a5c189f9c7a2fb72e1130815dda271bd9'
    },
  });