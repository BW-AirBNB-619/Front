import axios from "axios";


const axiosWithAuth = () => {
    const token = window.localStorage.getItem("access_token");
    return axios.create({
        headers: {
            authorization: `Bearer ${window.localStorage.getItem("access_token")}`
        },

    });
};

export default axiosWithAuth