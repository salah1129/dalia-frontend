import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const authContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [fullName, setFullName] = useState(localStorage.getItem("fullName") || null);
    const [email, setEmail] = useState(localStorage.getItem("email") || null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    const login = async (request) => {
        try {
            const response = await axios.post('http://localhost:8080/login', request);
            setFullName(response.data.fullName);
            setEmail(response.data.email);
            setToken(response.data.token);
            localStorage.setItem("site", response.data.token);
            localStorage.setItem("fullName", response.data.fullName);
            localStorage.setItem("email", response.data.email);
            console.log("logged in success");
            navigate("/checkout");
        } catch (error) {
            console.error(error.message);
        }
    };
    
    const logout = () => {
        setFullName(null);
        setEmail(null);
        setToken("");
        localStorage.removeItem("site");
        localStorage.removeItem("fullName");
        localStorage.removeItem("email");
        console.log("logout success");
        navigate("/login");
    };

    const isAuthenticated = () => {
        return token !== "";
    };
    return (
        <authContext.Provider value={{ 
        fullName,
        email,
        token, login, logout, isAuthenticated }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(authContext);
};

export default AuthProvider;