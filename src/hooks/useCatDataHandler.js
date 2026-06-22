import { useMegaMenu } from "./useMegaMenu";

export const useCatDataHandler = () => {
  const { categories, loading, error } = useMegaMenu();

  // Category (same as navbarData)
  const categoryData = categories;

  const wellnessMap = {};
  const goalMap = {};

  if (!categories || categories.length === 0) {
    return {
      categoryData: [],
      wellnessData: [],
      goalData: [],
      loading,
      error,
    };
  }

  categories.forEach((cat) => {
    cat.subcategories?.forEach((sub) => {
      sub.products?.forEach((product) => {
        // =========================
        // WELLNESS
        // =========================

        const wMainName = product.wellness?.category?.name;
        const wMainSlug = product.wellness?.category?.slug;

        const wSubName = product.wellness?.subcategory?.name;
        const wSubSlug = product.wellness?.subcategory?.slug;

        if (wMainName && wSubName) {
          if (!wellnessMap[wMainName]) {
            wellnessMap[wMainName] = {
              slug: wMainSlug,
              items: new Map(),
            };
          }

          wellnessMap[wMainName].items.set(wSubName, wSubSlug);
        }

        // =========================
        // GOAL
        // =========================

        const gMainName = product.goal?.category?.name;
        const gMainSlug = product.goal?.category?.slug;

        const gSubName = product.goal?.subcategory?.name;
        const gSubSlug = product.goal?.subcategory?.slug;

        if (gMainName && gSubName) {
          if (!goalMap[gMainName]) {
            goalMap[gMainName] = {
              slug: gMainSlug,
              items: new Map(),
            };
          }

          goalMap[gMainName].items.set(gSubName, gSubSlug);
        }
      });
    });
  });

  const wellnessData = Object.keys(wellnessMap).map((key) => ({
    id: key,
    name: key,
    slug: wellnessMap[key].slug,

    items: Array.from(wellnessMap[key].items).map(([name, slug]) => ({
      id: slug,
      name,
      slug,
    })),
  }));

  const goalData = Object.keys(goalMap).map((key) => ({
    id: key,
    name: key,
    slug: goalMap[key].slug,

    items: Array.from(goalMap[key].items).map(([name, slug]) => ({
      id: slug,
      name,
      slug,
    })),
  }));

  return {
    categoryData,
    wellnessData,
    goalData,
    loading,
    error,
  };
};