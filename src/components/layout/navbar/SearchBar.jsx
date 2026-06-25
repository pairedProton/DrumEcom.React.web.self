import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useSearch } from '../../../hooks/useSearch'
import { useMegaMenu } from '../../../hooks/useMegaMenu'

const SearchBar = () => {
  const {categories} = useMegaMenu()
  const {search} = useSearch(categories)

const [query, setQuery] = useState("");
const [results, setResults] = useState([]);  

useEffect(() => {
  const res = search(query);
  setResults(res);
}, [query]);

  return (
    <div className="relative w-3/5 bg-white shadow-2xl h-3/5 rounded-full flex justify-between px-4 items-center gap-4 ">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Search Products"
        className="outline-none border-none w-full "
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <CiSearch className="text-xl hover:text-primary transition-colors cursor-pointer" />
      {results.length > 0 && (
        <div className="absolute bg-white w-full shadow-lg mt-2 rounded-lg z-50 left-1/2 -translate-x-1/2 top-full max-h-120 overflow-y-auto px-2 ">
          {results.map((item, i) => (
            <div key={i} className="p-2 hover:bg-gray-100 cursor-pointer flex flex-col  ">
              <div className="font-medium">{item.name}</div>

              <div className="text-xs text-gray-500 mb-2 ">
                {item.type} {item.parent && `• ${item.parent}`}
              </div>
              <hr className="border-gray-200" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar