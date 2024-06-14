// pages/Home.jsx


import { useEffect, useState } from "react";
import { fetchCategories } from "../utils/FetchCategories"; 
import CategoryItem from "../components/CategoryItem"; 
import Priviliges from '../components/Priviliges'
import Localisation from "../components/Localisation"
import Cover from "../components/Cover";
import 'aos/dist/aos.css';


const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const categories = await fetchCategories(); 
            setCategories(categories);
        };

        fetchData();
    }, []);

    return ( 
        <div>
            <Cover />
            <Priviliges />
            <h1 className="text-3xl font-bold mt-8 mb-8 px-20">No pièces auto détachés</h1>
            {categories.length > 0 ? (
                <div className="flex flex-wrap px-20" style={{gap: "24px"}}>
                    {categories.map((category, index) => (
                        <CategoryItem key={index} category={category} />
                    ))}
                </div>
            ) : (
                <p>Loading categories...</p>
            )}
            <h2 className="text-3xl font-bold mt-8 mb-8 px-20">Notre localisation : en face de la station TOTAL située à : <a href="https://maps.app.goo.gl/86jjNHaG5Jd55dGu8" target="_blank" rel="noreferrer" className="text-blue-600">Cliquer ici</a></h2>
            <Localisation />
        </div>
    );
};

export default Home;
