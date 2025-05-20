import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "80db301dad3342b989b07037ffd3e0af"
    }
})