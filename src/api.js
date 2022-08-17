import axios from 'axios';


export default axios.create({
    baseURL: 'https://tradefever.org:8080/api/',
    // baseURL: 'https://216.137.185.113:8006/api/',

    headers: {
        'Content-Type': 'application/json',
    },
});