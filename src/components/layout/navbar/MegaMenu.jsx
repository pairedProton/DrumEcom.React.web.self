import React from "react";




const MegaMenu = ({categories,loading,error,setActiveMenu,type}) => {
  //  const [isMegaMenuOpen, setIsMegaMenuOpen] = menuOpenStatus


  if(loading){
    return (
      <div
        className="absolute left-0 top-full mt- flex
                     shadow-xl rounded-xl p-8 gap-8 z-50 font-body bg-gray-300 animate-pulse"
      >
      </div>
    );
  }

  if(error){
    return <div>Error: {error}</div>
  }
  return (
    <div
      className="absolute left-0 top-full mt-1 flex flex-wrap max-h-96 overflow-y-auto
                     shadow-xl rounded-xl p-8 gap-8 z-50 font-body bg-bg" onMouseEnter={()=>{
                      setActiveMenu(type) 
                      // setIsMegaMenuOpen(true)
                     }}
                     onMouseLeave={()=>{
                      setActiveMenu(null); 
                      // setIsMegaMenuOpen(false)
                     }}
    >
      {categories.map((cat, index) => (
        <div key={cat.id} className="flex flex-col gap-2 w-26">
          <h4 className="font-semibold mb-3 onHoverGreen">{cat.name}</h4>
          <ul className="space-y-3 text-gray-600">
            {(cat.subcategories || cat.items)?.map((subCat, subIndex) => (
              <li key={subCat.id}  className="cursor-pointer onHoverGreenLight" >{subCat.name || subCat}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
