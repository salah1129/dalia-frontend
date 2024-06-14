import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
    return (
        <Link to={`products/${category.categoryName}`}>
            <div className="w-[270px] flex flex-col items-center transform hover:scale-105 transition-all" data-aos="flip-left">
                <img src={`/categories/${category.image}`} alt={category.categoryName} className="h-48 w-68 rounded-md"/>
                <h3 className="no-underline font-bold">{category.categoryName}</h3>
            </div>
        </Link>
    );
};

export default CategoryItem;
