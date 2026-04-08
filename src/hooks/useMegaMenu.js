import { useEffect, useState } from "react";
import { getHomeCategories } from "../services/api/categoryApi";
import { getUseDemo } from "../config/appConfig";
import { megaMenuData } from "../constants/megaMenuData";


export const useCatSubCat = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchHomeCatogires = async () => {
      try {
        setLoading(true);

        if (getUseDemo()) {

setCategories(megaMenuData)

        } else {
          const data = await getHomeCategories();
          setCategories(data);
        }
      } catch (error) {
        setError("error in fetching Categories : " + error.message);
        console.log("error in fetching Categories : ", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeCatogires();
  }, []);

  return { categories, loading, error };
};