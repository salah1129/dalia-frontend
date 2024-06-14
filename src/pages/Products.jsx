
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../utils/FetchProducts";
import ProductItem from "../components/ProductItem";
import FilterBar from "../components/FilterBar";
import { addToCart } from "../utils/AddRemoveCart";
import Button from "../components/Button";

const Products = () => {
const { categoryName } = useParams();
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(() => {
    const fetchData = async () => {
    const fetchedProducts = await fetchProducts();
    const categoryProducts = fetchedProducts.filter(p => p.categoryName === categoryName);
    setProducts(categoryProducts);
    setFilteredProducts(categoryProducts);
    };
    fetchData();
}, [categoryName]);

const getBrands = [...new Set(products.map(product => product.brand))];
const getCars = [...new Set(products.map(product => product.typeOfCar))];

const filterByBrand = (brand) => {
    const filteredByBrand = products.filter(p => p.brand === brand);
    setFilteredProducts(filteredByBrand);
};

const filterByCar = (car) => {
    const filteredByCar = products.filter(p => p.typeOfCar === car);
    setFilteredProducts(filteredByCar);
};

const getAllProducts = () => {
    setFilteredProducts(products)
}


return (
    <div className="flex">
        <FilterBar brands={getBrands} cars={getCars} handleBrandClick={filterByBrand} handleCarClick={filterByCar} 
        filterBarStyles={"flex flex-col w-[20vw] absolute py-5 px-10 h-screen overflow-y-scroll sticky top-0 left-0 "}
        />
        {filteredProducts.length > 0 ? (
        <div className="bg-gray-200">
            <div className=" w-[80vw] ml-[auto] p-5 ">
            <h1 className="text-4xl mb-5 pr-8 font-bold flex justify-between items-center">{categoryName} <span className="text-sm bg-gray-600 px-4 py-1 rounded text-white"> <Button children={"all products"} onClick={()=>getAllProducts()} /> </span></h1>
            <div className="flex flex-wrap gap-10">
            {filteredProducts.map((product, index) => (
            <ProductItem
                key={index}
                product={product}
                showCartButton={true}
                addToCart={() => addToCart(product)}
                classNameProduct="w-[230px] "
                classNameImg="rounded-xl h-[200px] w-full "
                cartBtnStyles={"w-full bg-gray-900 text-white px-1 py-2 rounded hover:bg-gray-800"}
                />            
            ))}
            </div>
            </div>
        </div>
        ) : (
        <p>Pas de produits pour cette catégorie</p>
        )}
    </div>
);
};

export default Products;
