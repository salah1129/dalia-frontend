import React, { useState } from "react";
import Button from "./Button";

const FilterBar = ({ brands, cars, handleBrandClick, handleCarClick, filterBarStyles }) => {
  const [isBrandHovered, setIsBrandHovered] = useState(false);
  const [isCarHovered, setIsCarHovered] = useState(false);

  return (
    <div className={`${filterBarStyles}`} >
      <div 
        onMouseEnter={() => setIsBrandHovered(true)}
        onMouseLeave={() => setIsBrandHovered(false)}
      >
        <h3 className="mb-2 cursor-pointer font-bold">Filtrer par marque -</h3>
        <div className={`flex flex-col ${isBrandHovered ? '' : 'hidden'}`}>
          {brands.map((brand, index) => (
            <Button children={brand} key={index} onClick={() => handleBrandClick(brand)} 
              btnStyles={"text-start h-10 mb-2 transition duration-300 px-1 rounded hover:bg-gray-300 text-sm "}
            />
          ))}
        </div>
      </div>
      <hr className="border-t-1 border-gray-500 my-4 opacity-25"/>
      <div 
        onMouseEnter={() => setIsCarHovered(true)}
        onMouseLeave={() => setIsCarHovered(false)}
      >
        <h3 className="mb-2 cursor-pointer font-bold">Filtrer par voiture -</h3>
        <div className={`flex flex-col ${isCarHovered ? '' : 'hidden'}`}>
          {cars.map((car, index) => (
            <Button children={car} key={index} onClick={() => handleCarClick(car)}
              btnStyles={"text-start h-10 mb-2 transition duration-300 px-1 rounded hover:bg-gray-300 text-sm"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
