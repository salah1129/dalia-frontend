import axios from 'axios';

export const searchForProducts = async (query) => {
    try {
        const response = await axios.get(`http://localhost:8080/searchForProducts/${query}`);
        return response.data;
    } catch (error) {
        console.error('Error searching for the product:', error);
        throw error;
    }
};
