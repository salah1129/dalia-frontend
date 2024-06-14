import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";

function Login() {
    const auth = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.login({ email, password });
    };

    return (
        <div className="h-screen pt-[100px] pl-[60px] " 
        style={{
            backgroundImage: `url(/form.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
            <div className="max-w-md w-full space-y-8 p-10  bg-gray-200">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Login</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your email"
                        type="text"
                        id="username"
                        name="username"
                        required
                        autoComplete="new-email"
                        onChange={handleEmailChange}
                    />
                    <input
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-4"
                        placeholder="Enter your password"
                        type="password"
                        id="password"
                        name="password"
                        required
                        autoComplete="new-password"
                        onChange={handlePasswordChange}
                    />
                    <Button children={"Login"} btnStyles="w-full mt-4 bg-gray-800 text-white py-2 rounded"/>
                </form>
                <p className="text-center mt-2">
                    Not registered yet? <Link to={"/register"} className="text-indigo-600 hover:text-indigo-500">Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
