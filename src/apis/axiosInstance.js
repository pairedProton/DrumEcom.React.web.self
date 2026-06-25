import axios from "axios";
import { toast } from "sonner";
import { store } from "@redux/store";
import { baseUrl } from "./apiContants";

const axiosConfig = {
  baseURL: baseUrl,
  //   timeout: 1000 * 60 * 1, // 1 min
};

export const axiosPublic = axios.create(axiosConfig);
const axiosInstance = axios.create(axiosConfig);

/**
 * Request Interceptor
 * - Attaches the Bearer token to every request dynamically
 * - Fetches the token fresh from Redux store on each request
 */
axiosInstance.interceptors.request.use(
  config => {
    const token = store.getState()?.base?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = "application/json";
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

/**
 * Centralized logout / auto-logout handler
 * Triggered when session expires or user becomes unauthorized
 */
const takeAction = () => {
  // Show session expiration message
  toast.error("Unauthorized. Please login again.");

  localStorage.clear();

  // replace() prevents navigating back to protected routes
  //   window.location.replace("/");
};

/**
 * Axios Response Interceptor
 * - Listens for authentication-related errors
 * - 401: Unauthorized (not logged in / session expired)
 */
axiosInstance.interceptors.response.use(
  response => {
    // Successful responses simply pass through
    return response;
  },
  error => {
    const status = error?.response?.status;

    if (status === 401) {
      takeAction();
    }

    // Reject error so calling code can still handle it if needed
    return Promise.reject(error);
  },
);

export default axiosInstance;
