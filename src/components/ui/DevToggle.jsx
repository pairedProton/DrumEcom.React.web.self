import React, { useState } from "react";
import { getUseDemo, setUseDemo } from "../../config/appConfig";

const DevToggle = () => {

    const [demoData,setDemoData] = useState(getUseDemo())

    const handleDataLogic = () =>{
        const newDemoData = !demoData
        
        setDemoData(newDemoData)
        setUseDemo(newDemoData)

        window.location.reload();
    }

  return (
    <div
      className={`fixed z-50 p-2 rounded-lg bottom-8 cursor-pointer right-10 ${demoData ? "bg-emerald-700 text-white " : "bg-amber-300 text-emerald-700"}  font-semibold`}
      onClick={()=>{
        handleDataLogic()
      }} >{`${demoData ? "Demo Data" : "API Data"}`}</div>
  );
};

export default DevToggle;
