import { useMegaMenu } from "./useMegaMenu"

export const useCatDataHandler = () => {
  const { categories, loading, error } = useMegaMenu()

  // 🟢 Category (as it is)
  const categoryData = categories

 const wellnessMap = {}
const goalMap = {}

if (!categories || categories.length === 0) {
  return {
    categoryData: [],
    wellnessData: [],
    goalData: [],
    loading,
    error
  }
}

categories.forEach(cat => {
  cat.subcategories?.forEach(sub => {
    sub.products?.forEach(product => {

      // Wellness
      const wMain = product.wellness?.category
      const wSub = product.wellness?.subcategory

      if (wMain && wSub) {
        if (!wellnessMap[wMain]) wellnessMap[wMain] = new Set()
        wellnessMap[wMain].add(wSub)
      }

      // Goal
      const gMain = product.goal?.category
      const gSub = product.goal?.subcategory

      if (gMain && gSub) {
        if (!goalMap[gMain]) goalMap[gMain] = new Set()
        goalMap[gMain].add(gSub)
      }

    })
  })
})

const wellnessData = Object.keys(wellnessMap).map(key => ({
  name: key,
  items: Array.from(wellnessMap[key])
}))

const goalData = Object.keys(goalMap).map(key => ({
  name: key,
  items: Array.from(goalMap[key])
}))

  return {
    categoryData,
    wellnessData,
    goalData,
    loading,
    error
  }
}