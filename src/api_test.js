import axios from 'axios';


export default axios.create({
    // baseURL: 'https://216.137.185.113:8006/',
    baseURL: 'https://tradefever.org:8080/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + localStorage.getItem('token'),
    },

});