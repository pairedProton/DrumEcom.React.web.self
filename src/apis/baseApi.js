import { getFullObjectUrl } from "./apiContants";

export default function baseApi(){
    const apiList = {
        login: '/login',
        register: '/register',
    }

    return getFullObjectUrl(apiList);
}