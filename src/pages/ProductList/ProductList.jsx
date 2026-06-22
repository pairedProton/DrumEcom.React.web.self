import React, { useState, useEffect } from "react";
import { LuLeaf, LuChevronDown, LuChevronUp } from "react-icons/lu"
import { useParams } from 'react-router-dom'
import {useCatDataHandler} from '../../hooks/useCatDataHandler'




const CustomCheckbox = ({ id, label, count, checked, onChange, indented = false }) => {
  return (
    <div className={`flex items-center justify-between py-1.5 ${indented ? 'ml-7' : ''}`}>
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="relative flex items-center shrink-0">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            className="peer h-4 w-4 appearance-none rounded-[3px] border border-gray-300 bg-white checked:border-[#6f9071] checked:bg-[#6f9071] focus:outline-none transition-all cursor-pointer"
          />
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <label htmlFor={id} className="text-[13.5px] text-gray-700 cursor-pointer select-none truncate">
          {label}
        </label>
      </div>
      {count && <span className="text-[13px] text-gray-500 shrink-0 ml-2">({count})</span>}
    </div>
  );
};

const FilterAccordion = ({ title, defaultOpen = true, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between bg-transparent cursor-pointer"
      >
        <div className="flex items-center gap-2 text-[#6f9071]">
          <LuLeaf className="text-lg" />
          <h4 className="text-[13.5px] font-semibold tracking-wide text-gray-600 uppercase">
            {title}
          </h4>
        </div>
        {isOpen ? (
          <LuChevronUp className="text-gray-500 text-lg" />
        ) : (
          <LuChevronDown className="text-gray-500 text-lg" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 max-h-56 overflow-y-auto pr-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#e6e0cc] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-[#fcfcfc]">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductList = () => {
  
const { categoryData, goalData, wellnessData } = useCatDataHandler();

  const { categorySlug, subCategorySlug } = useParams();

  const [filters, setFilters] = useState({
    category: [],
    subCategory: [],
    goal: [],
    goalSubCategory: [],
    wellness: [],
    wellnessSubCategory: [],
  });

  useEffect(() => {
    if (categorySlug) {
      setFilters(prev => ({
        ...prev,
        category: [categorySlug],
      }));

      setExpanded(prev => ({
        ...prev,
        [categorySlug]: true,
      }));
    }

    if (subCategorySlug) {
      setFilters(prev => ({
        ...prev,
        subCategory: [subCategorySlug],
      }));
    }
  }, [categorySlug, subCategorySlug]);


  const toggleFilter = (group, value) => {
    setFilters(prev => {
      const exists = prev[group].includes(value);

      return {
        ...prev,
        [group]: exists
          ? prev[group].filter(item => item !== value)
          : [...prev[group], value],
      };
    });
  };

  const toggleAccordion = slug => {
    setExpanded(prev => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const [expanded, setExpanded] = useState({});

  // const handleCategoryChange = (e) => {
  //   setCategories({ ...categories, [e.target.id]: e.target.checked });
  // };

  // const handleTypeChange = (e) => {
  //   setTypes({ ...types, [e.target.id]: e.target.checked });
  // };

  return (
    <div className="container mx-auto w-full min-h-screen flex gap-6 p-6 font-sans bg-white">
      <div className="categorySec w-[30%] min-w-[300px] max-w-[340px] flex flex-col border border-gray-200 rounded-md p-6 shadow-sm h-fit">
        {/* Header */}
        <div className="filter flex justify-between items-center mb-4">
          <h5 className="text-[14px] font-bold text-gray-800 tracking-wider">
            FILTERS
          </h5>
          <button className="text-[11px] font-bold text-[#446b5a] uppercase tracking-wider hover:underline">
            Clear All
          </button>
        </div>

        <hr className="w-full h-px bg-gray-200 border-0 mb-1" />

        {/* Product Category Accordion */}
        {categoryData.map(cat => (
          <div key={cat.slug}>
            <div className="flex items-center justify-between">
              <CustomCheckbox
                id={cat.slug}
                label={cat.name}
                checked={filters.category.includes(cat.slug)}
                onChange={() => {
                  toggleFilter("category", cat.slug);

                  setExpanded(prev => ({
                    ...prev,
                    [cat.slug]: true,
                  }));
                }}
              />

              <button onClick={() => toggleAccordion(cat.slug)}>
                {expanded[cat.slug] ? <LuChevronUp /> : <LuChevronDown />}
              </button>
            </div>

            {expanded[cat.slug] && (
              <div className="ml-6">
                {cat.subcategories?.map(sub => (
                  <CustomCheckbox
                    key={sub.slug}
                    id={sub.slug}
                    label={sub.name}
                    checked={filters.subCategory.includes(sub.slug)}
                    onChange={() => toggleFilter("subCategory", sub.slug)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        <FilterAccordion title="Goal">
          {goalData.map(goal => (
            <div key={goal.slug}>
              <div className="flex items-center justify-between">
                <CustomCheckbox
                  id={goal.slug}
                  label={goal.name}
                  checked={filters.goal.includes(goal.slug)}
                  onChange={() => {
                    toggleFilter("goal", goal.slug);

                    setExpanded(prev => ({
                      ...prev,
                      [goal.slug]: true,
                    }));
                  }}
                />

                <button onClick={() => toggleAccordion(goal.slug)}>
                  {expanded[goal.slug] ? <LuChevronUp /> : <LuChevronDown />}
                </button>
              </div>

              {expanded[goal.slug] && (
                <div className="ml-6">
                  {goal.items?.map(sub => (
                    <CustomCheckbox
                      key={sub.slug}
                      id={sub.slug}
                      label={sub.name}
                      checked={filters.goalSubCategory.includes(sub.slug)}
                      onChange={() => toggleFilter("goalSubCategory", sub.slug)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </FilterAccordion>

        <FilterAccordion title="Wellness">

  {wellnessData.map(wellness => (
    <div key={wellness.slug}>

      <div className="flex items-center justify-between">
        <CustomCheckbox
          id={wellness.slug}
          label={wellness.name}
          checked={filters.wellness.includes(wellness.slug)}
          onChange={() => {
            toggleFilter("wellness", wellness.slug);

            setExpanded(prev => ({
              ...prev,
              [wellness.slug]: true,
            }));
          }}
        />

        <button onClick={() => toggleAccordion(wellness.slug)}>
          {expanded[wellness.slug] ? <LuChevronUp /> : <LuChevronDown />}
        </button>
      </div>

      {expanded[wellness.slug] && (
        <div className="ml-6">

          {wellness.items?.map(sub => (
            <CustomCheckbox
              key={sub.slug}
              id={sub.slug}
              label={sub.name}
              checked={filters.wellnessSubCategory.includes(sub.slug)}
              onChange={() =>
                toggleFilter(
                  "wellnessSubCategory",
                  sub.slug
                )
              }
            />
          ))}

        </div>
      )}

    </div>
  ))}

</FilterAccordion>
      </div>
    </div>
  );
}

export default ProductList