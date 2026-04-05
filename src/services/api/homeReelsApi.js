import axiosInstance from "./axiosInstance";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";

export const getHomeReels = async () =>{
    const responce = await axiosInstance.get(API_ENDPOINTS.HOME_REELS)
    return responce.data.data
}

