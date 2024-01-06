import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params : {
        key : '81a16b0843764ac9a1fbe4dd5cfcb035'
    }
})