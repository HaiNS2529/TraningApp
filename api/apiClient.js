import axios from "axios";
import qs from "qs"
import CookieManager from "@react-native-cookies/cookies";

const baseUrl = 'https://provinces.open-api.vn/api';

const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },

    paramsSerializer: (params) =>{
        return qs.stringify(params);
    }
})

export default apiClient;

