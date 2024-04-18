function Category({ handleFilter}) { //handlefilter as prop

    return (
      <div id="category" className="text-center w-full  opacity-75 mt-4">
      <button onClick={()=>window.location.reload()} className='p-3  font-bold border-r-2 border-lime-600   text-white'>Shop</button>
        <button onClick={()=>handleFilter("fruits")} className='p-3  m-2 border-r-2 border-lime-600 text-white font-bold'>Fruits</button>
        <button onClick={()=>handleFilter("Dairy")}  className='p-3  m-2 border-r-2 border-lime-600 text-white font-bold'>Dairy</button>
        <button onClick={()=>handleFilter("Veggies")} className='p-3  m-2 border-r-2 border-lime-600 text-white font-bold'>Veggies</button>
        <button onClick={()=>handleFilter("meat")}  className='p-3  m-2 border-r-2 border-lime-600 text-white font-bold'>Meat</button>
        <button onClick={()=>handleFilter("Nuts")} className='p-3  m-2 border-r-2 border-lime-600 text-white font-bold'>Nuts</button>
        <button onClick={()=>handleFilter("Cereals")}   className='p-3  m-2 border-r-2 border-lime-600 text-white font-bold'>Cereals</button>
      </div>
    )
  }
  
  export default Category