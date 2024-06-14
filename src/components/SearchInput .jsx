import React, { useState, useRef, useEffect } from 'react';
import { searchForProducts } from '../utils/SearchForProducts ';
import ProductItem from './ProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const searchResultsRef = useRef(null);

    const handleInputChange = async (event) => {
        const { value } = event.target;
        setSearchQuery(value);
        if (value.trim() === '') {
            setSearchResults([]);
        } else {
            try {
                const results = await searchForProducts(value);
                setSearchResults(results);
                console.log(`search result : ${results}`);
            } catch (error) {
                console.error('Error searching for the product:', error);
            }
        }
    };

    const handleClickOutside = (event) => {
        if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div className="relative flex items-center">
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-500" />
                <input 
                    placeholder="Chercher un produit" 
                    value={searchQuery}
                    onChange={handleInputChange}
                    type="text"
                    className="pl-10 pr-4 py-2 w-[600px] border rounded focus:outline-none focus:ring-2 focus:ring-blue-900 text-black"
                />
            </div>
            {searchResults.length > 0 && (
                <div ref={searchResultsRef} className="absolute mt-2 w-full bg-white border rounded shadow-lg z-10 max-h-80 overflow-y-auto text-black">
                    {searchResults.map((product, index) => (
                        <Link to={`/productsDetails/${product.id}`}>
                        <ProductItem 
                        key={index} 
                        product={product} 
                        classNameImg={"h-20 w-20 rounded"} 
                        classNameProduct={"flex gap-6 hover:bg-gray-200 p-3"}                       
                        />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchInput;
