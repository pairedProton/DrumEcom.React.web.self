import React from "react";
import BannerSection from "../../components/sections/home/BannerSection";
import CategorySection from "../../components/sections/home/CategorySection";
import CategoryProductSection from "../../components/sections/home/CategoryProductSection";
import { immunityCategoryData } from "../../constants/ImmunityCategoryData";
import { bestSellingData } from "../../constants/bestSellingData";
import ReelSection from "../../components/sections/home/ReelSection";
// import { homeVideos } from "../../assets/images";
import { homeReelData } from "../../constants/homeReelData";
// import { saleOfTheDayData } from "../../constants/SaleOfTheDayData";
import ProductMeritSection from "../../components/sections/home/ProductMeritSection";
import { ProductMerits } from "../../constants/productMeritData";
import ReviewSection from "../../components/sections/home/ReviewSection";
import { reviewsData } from "../../constants/reviewData";
import { useHomeCat1Products } from "../../hooks/useHomeCat1Products";
import { useHomeCat2Products } from "../../hooks/useHomeCat2Products";
import { useHomeCat3Products } from "../../hooks/useHomeCat3Products";
import { useHomeReels } from "../../hooks/useHomeReels";

const Home = () => {
  const {
    popularProducts: cat1Products,
    loading: cat1Loading,
    error: cat1Error,
  } = useHomeCat1Products();

  const {
    popularProducts: cat2Products,
    loading: cat2Loading,
    error: cat2Error,
  } = useHomeCat2Products();

  const {
    popularProducts: cat3Products,
    loading: cat3Loading,
    error: cat3Error,
  } = useHomeCat3Products();

  const { reels, loading, error } = useHomeReels();

  return (
    <div className="w-full flex flex-col gap-10">
      <BannerSection />
      <CategorySection />

      {/* category 1 products  */}

      <CategoryProductSection
        products={cat1Products}
        loading={cat1Loading}
        error={cat1Error}
        title="Immunity Boosters"
      />
      <CategoryProductSection
        products={cat2Products}
        loading={cat2Loading}
        error={cat2Error}
        title="Best Selling Products"
      />
      {/* <ReelSection  videoData={Object.values(homeVideos)}/> */}
      <ReelSection videoData={reels} loading={loading} error={error} />
      <CategoryProductSection
        products={cat3Products}
        loading={cat3Loading}
        error={cat3Error}
        title="Sale Of The Day"
      />
      <ProductMeritSection {...ProductMerits[0]}></ProductMeritSection>
      <ProductMeritSection {...ProductMerits[1]}></ProductMeritSection>
      <ReviewSection reviewsData={reviewsData} />
      <ProductMeritSection {...ProductMerits[2]}></ProductMeritSection>
    </div>
  );
};

export default Home;
