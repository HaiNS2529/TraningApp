import apiClient from "./apiClient";

export default provincesApi = {
    getProvinces(){
        const url = 'p/';
        return apiClient.get(url)
    }
}