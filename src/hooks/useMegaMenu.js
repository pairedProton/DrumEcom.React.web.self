import { useEffect, useState } from "react";
import { getHomeCategories } from "../services/api/categoryApi";
import { getUseDemo } from "../config/appConfig";
// import { megaMenuData } from "../constants/megaMenuData";
import { navbarData } from "../constants/navbarData";

export const useMegaMenu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMegaMenu = async () => {
      try {
        setLoading(true);

        if (getUseDemo()) {

// setCategories(megaMenuData)
setCategories(navbarData)

        } else {
          const data = await getHomeCategories();
          setCategories(data);
        }
      } catch (error) {
        setError("error in fetching Mega Menu : " + error.message);
        console.log("error in fetching Mega Menu : ", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMegaMenu();
  }, []);

  return { categories, loading, error };
};