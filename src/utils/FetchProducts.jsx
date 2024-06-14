import axios from "axios";

export const fetchProducts = async () => {
    try{
        const response = await axios.get("http://localhost:8080/products");
        console.log("fetched products : " + response.data)
        if(Array.isArray(response.data)){
            return response.data
        } else {
            console.error('Expected an array but received:', response.data);
            return[]
        }
    } catch(error){
        console.error(error)
    }
}

export const fetchProductsByID = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8080/products/${id}`);
        console.log("fetched products : " + response.data)
        return response.data
    } catch(error){
        console.error(error)
    }
}