import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function SearchBar({HandleChange, value}) {
    return (
        <div className="mx-auto text-center mt-2">
        <div className="relative w-1/2 mx-auto">
            <input id="search" type="text" className="w-full p-4 pr-16 rounded-md border-2 border-zinc-500" onChange={HandleChange} value={value} placeholder="Search by name..."/>
            <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-2xl text-gray-500" />
        </div>
    </div>
    
    )
  }
  
  export default SearchBar