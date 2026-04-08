import { useEffect, useState } from "react";
import { getReviews } from "../services/api/reviewApi";
import { getUseDemo } from "../config/appConfig";
import { reviewsData } from "../constants/reviewData";


export const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        setLoading(true);
        if (getUseDemo()) {
            setReviews(reviewsData)
        } else {

const data = await getReviews()
setReviews(data)

        }
      } catch (error) {
        setError(error)
      }

      finally{
        setLoading(false)
      }
    };

    fetchReviewsData()
  }, []);

  return {reviews,loading,error}
};
