import { useState,useEffect } from "react";
import { getPopularProducts } from "../services/api/popularProductsApi";
import { saleOfTheDayData } from "../constants/saleOfTheDayData";
import { getUseDemo } from "../config/appConfig";

export const useHomeCat3Products = () =>{
    const [popularProducts,setPopularProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchPopularProducts = async () => {
            try {
                setLoading(true)

                if (getUseDemo()) {
                    setPopularProducts(saleOfTheDayData)

                } else {
                const data = await getPopularProducts();
                setPopularProducts(data);    
                }
                
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPopularProducts();
    }, []);

    return {popularProducts,loading,error};
}