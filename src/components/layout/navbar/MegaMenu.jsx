import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




const MegaMenu = ({categories,loading,error,setActiveMenu,type
  // ,menuOpenStatus
}) => {
  //  const [isMegaMenuOpen, setIsMegaMenuOpen] = menuOpenStatus
console.log("categories: ",categories,"loading: ",loading,"error: ",error,"setActiveMenu: ",setActiveMenu,"type: ",type);
  const navigate = useNavigate();
  const getBasePath = () => {
    if (type === "category") return "/products/category";
    if (type === "goal") return "/products/goal";
    if (type === "wellness") return "/products/wellness";
  };

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
      className="absolute left-0 top-full mt-1 flex flex-wrap max-h-120 overflow-y-auto justify-between 
                     shadow-xl rounded-xl p-8 gap-8 z-50 font-body bg-bg"
      onMouseEnter={() => {
        setActiveMenu(type);
        // setIsMegaMenuOpen(true)
      }}
      onMouseLeave={() => {
        setActiveMenu(null);
        // setIsMegaMenuOpen(false)
      }}
    >
      {categories.map((cat, index) => (
        <div key={cat.id} className="flex flex-col gap-2 w-30">
          <h4 className="font-semibold onHoverGreen h-8 leading-4.5">
            <Link to={`${getBasePath()}/${cat.slug}`}>{cat.name}</Link>
          </h4>
          <ul className="flex flex-col gap-1 text-xs text-gray-600">
            {(cat.subcategories || cat.items)?.map((subCat, subIndex) => (
              <li key={subCat.id} className="cursor-pointer onHoverGreenLight">
                <Link to={`${getBasePath()}/${cat.slug}/${subCat.slug}`}>
                  {subCat.name || subCat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
