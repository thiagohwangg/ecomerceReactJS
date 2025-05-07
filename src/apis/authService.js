import axiosClient from "@/apis/axiosClient";

const register = async(body) => {
    return await axiosClient.post('/register', body);

}

const signIn =  async(body) => {
    return await axiosClient.post('/login', body);
}

const getInfo = async() => {
    return await axiosClient.get(`/user/info/54f9a4fd-ac31-47d5-abf4-ae431499f1b0`);
}

export {register,signIn,getInfo}