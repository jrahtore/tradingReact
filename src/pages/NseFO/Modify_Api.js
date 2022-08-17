import axios from "axios";

export default axios.create({
    baseURL: "https://tradefever.org:8080/api/token/",

    header: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + localStorage.getItem('token')

    }
})