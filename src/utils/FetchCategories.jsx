

import axios from "axios";

export const fetchCategories = async () => {
    try {
        const response = await axios.get("http://localhost:8080/categories");
        console.log('Fetched categories:', response.data);
        if (Array.isArray(response.data)) {
            return response.data;
        } else {
            console.error('Expected an array but received:', response.data);
            return [];
        }
    } catch (err) {
        console.error('Error fetching categories:', err);
        return [];
    }
};

