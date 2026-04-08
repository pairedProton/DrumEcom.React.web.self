import React from 'react'
import { CiSearch } from 'react-icons/ci'


const SearchBar = () => {
  return (
    <div className='w-3/5 bg-white shadow-2xl h-3/5 rounded-full flex justify-between px-4 items-center gap-4 ' >
        <input type="text" name="searchBar" id="searchBar" placeholder='Search Products' className='outline-none border-none w-full ' />
<CiSearch className='text-xl hover:text-primary transition-colors cursor-pointer' />
    </div>
  )
}

export default SearchBar