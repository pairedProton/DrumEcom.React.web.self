import { useMemo } from "react"


export const useSearch = (categories) => {

  const searchList = useMemo(() => {
    const list = []

    categories.forEach(cat => {

      // category
      list.push({
        type: "category",
        name: cat.name,
        tags: cat.tags || [],
      })

      cat.subcategories?.forEach(sub => {

        // subcategory
        list.push({
          type: "subcategory",
          name: sub.name,
          parent: cat.name,
          tags: sub.tags || [],
        })

        sub.products?.forEach(prod => {

          // product
          list.push({
            type: "product",
            name: prod.name,
            parent: sub.name,
            category: cat.name,
            tags: prod.tags || [],
          })

        })
      })
    })

    return list
  }, [categories])


const search = (query) => {
  if (!query) return []

  const q = query.toLowerCase()
  const result = []

  searchList.forEach(item => {
    const match =
      item.name.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))

    if (match) {
      result.push(item)

      // 🔥 relation add
      if (item.type === "product") {
        result.push({
          type: "subcategory",
          name: item.parent
        })
      }
    }
  })

  // 🔥 remove duplicates
  const unique = Array.from(
    new Map(result.map(i => [i.name, i])).values()
  )

  return unique
}

  return { search }
}