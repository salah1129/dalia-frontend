import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByID } from "../utils/FetchProducts";
import { addToCart } from "../utils/AddRemoveCart"

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const fetchProduct = await fetchProductsByID(id);
            setProduct(fetchProduct);
        };
        fetchData();
    }, [id]);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                <div className="md:w-1/2 flex justify-center items-center relative">
                    <img
                        src={`/products/${product.images[currentImageIndex]}`}
                        alt={product.productName}
                        className="w-80 h-auto object-cover"
                    />
                    <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-r hover:bg-gray-700"
                    >
                        Prev
                    </button>
                    <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-l hover:bg-gray-700"
                    >
                        Next
                    </button>
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">{product.productName}</h1>
                        <p className="text-gray-700 mb-4">{product.productDescription}</p>
                        <p className="text-gray-700 mb-4"><strong>Brand:</strong> {product.brand}</p>
                        <p className="text-gray-700 mb-4"><strong>Category:</strong> {product.categoryName}</p>
                        <p className="text-gray-700 mb-4"><strong>Type of Car:</strong> {product.typeOfCar}</p>
                        <p className="text-gray-700 mb-4"><strong>Ref:</strong> {product.ref}</p>
                        <p className="text-gray-700 mb-4"><strong>Price:</strong> ${product.price}</p>
                        <p className="text-gray-700 mb-4"><strong>Remaining Pieces:</strong> {product.remainingPieces}</p>
                        <p className="text-gray-700 mb-4"><strong>More Info:</strong> {product.moreInfo}</p>
                        <p className="text-gray-700"><strong>How to Use:</strong> {product.howToUse}</p>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button onClick={ () => addToCart(product)} className="bg-gray-900 w-full text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
