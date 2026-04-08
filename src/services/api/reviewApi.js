import axiosInstance from "./axiosInstance";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";

export const getReviews = async () =>{
const response = await axiosInstance.get(API_ENDPOINTS.HOME_REVIEWS)
return response.data.data 
}