import { useEffect, useState } from "react";
import { getHomeReels } from "../services/api/homeReelsApi";
import { getUseDemo } from "../config/appConfig";
import { homeReelData } from "../constants/homeReelData";

export const useHomeReels = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReelsData = async () => {
      try {
        setLoading(true);
        if (getUseDemo()) {
          setReels(homeReelData);
        } else {
          const data = await getHomeReels();
          setReels(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReelsData()
  }, []);

  return { reels, loading, error };
};
