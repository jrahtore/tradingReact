import axios from 'axios';


export default axios.create({
    baseURL: 'http://rtrading.thinkzyproducts.com:8006/',
    // baseURL: 'http://216.137.185.113:8006/',

    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + localStorage.getItem('token')
    },
});