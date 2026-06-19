import React, { useState } from 'react'
import { LuLeaf, LuChevronDown, LuChevronUp } from "react-icons/lu"
import { useParams } from 'react-router-dom'
import {useCatDataHandler} from '../../hooks/useCatDataHandler'




const CustomCheckbox = ({ id, label, count, checked, onChange, indented = false }) => {


const { categoryData, goalData, wellnessData } = useCatDataHandler();

const { categorySlug, subCategorySlug } = useParams();
// const {yoyo} = useParams();

// console.log("this is params"+yoyo); 

const [filters, setFilters] = useState({
  category: [],
  subCategory: [],
  goal: [],
  goalSubCategory: [],
  wellness: [],
  wellnessSubCategory: [],
});


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
  const [categories, setCategories] = useState({
    all: false,
    pulses: true,
    oils: false,
    spices: false,
    dryFruits: false,
  });

  const [types, setTypes] = useState({
    driedPulses: false,
    millets: false,
    wholeMillets: false,
    flours: false,
    rice: false,
  });

  const handleCategoryChange = (e) => {
    setCategories({ ...categories, [e.target.id]: e.target.checked });
  };

  const handleTypeChange = (e) => {
    setTypes({ ...types, [e.target.id]: e.target.checked });
  };

  return (
    <div className='container mx-auto w-full min-h-screen flex gap-6 p-6 font-sans bg-white' >
      <div className="categorySec w-[30%] min-w-[300px] max-w-[340px] flex flex-col border border-gray-200 rounded-md p-6 shadow-sm h-fit">
        
        {/* Header */}
        <div className="filter flex justify-between items-center mb-4">
          <h5 className='text-[14px] font-bold text-gray-800 tracking-wider' >FILTERS</h5>
          <button className='text-[11px] font-bold text-[#446b5a] uppercase tracking-wider hover:underline' >
            Clear All
          </button>
        </div>
        
        <hr className='w-full h-px bg-gray-200 border-0 mb-1' />

        {/* Product Category Accordion */}
        <FilterAccordion title="Product Category" defaultOpen={true}>
          <div className="flex flex-col gap-1">
            <CustomCheckbox id="all" label="All" checked={categories.all} onChange={handleCategoryChange} />
            <CustomCheckbox id="pulses" label="Pulses, Millets & Gr..." count="20" checked={categories.pulses} onChange={handleCategoryChange} />
            <CustomCheckbox id="oils" label="Cooking Oils & Gh..." count="20" checked={categories.oils} onChange={handleCategoryChange} />
            <CustomCheckbox id="spices" label="Whole Spices, Seed..." count="20" checked={categories.spices} onChange={handleCategoryChange} />
            <CustomCheckbox id="dryFruits" label="Dry Fruits & Nuts" count="20" checked={categories.dryFruits} onChange={handleCategoryChange} />
            <button className="text-[13px] text-left text-gray-800 mt-2 hover:text-[#6f9071] font-medium w-fit">View All</button>
          </div>
        </FilterAccordion>

        {/* Product Type Accordion */}
        <FilterAccordion title="Product Type" defaultOpen={true}>
          <div className="flex flex-col gap-1">
            <CustomCheckbox id="driedPulses" label="Dried Pulses" count="20" checked={types.driedPulses} onChange={handleTypeChange} />
            <CustomCheckbox id="millets" label="Millets" count="20" checked={types.millets} onChange={handleTypeChange} />
            <CustomCheckbox id="wholeMillets" label="Whole Millets" count="10" indented={true} checked={types.wholeMillets} onChange={handleTypeChange} />
            <CustomCheckbox id="flours" label="Flours & Mixes" count="10" indented={true} checked={types.flours} onChange={handleTypeChange} />
            <CustomCheckbox id="rice" label="Rice & Grains" count="20" checked={types.rice} onChange={handleTypeChange} />
          </div>
        </FilterAccordion>
        
      </div>
    </div>
  )
}

export default ProductList