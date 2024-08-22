import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2d7d255eea6f405c907c3b45ec1208cf'
    }
});