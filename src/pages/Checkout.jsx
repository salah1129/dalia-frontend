import React from 'react';

const Checkout = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold mb-6 text-center">Checkout</h1>
                <form className="flex flex-wrap -mx-4">
                    {/* Personal Details Section */}
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Full Name" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Email Address" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input 
                                type="text" 
                                id="address" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Street Address" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                City
                            </label>
                            <input 
                                type="text" 
                                id="city" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="City" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
                                Zip Code
                            </label>
                            <input 
                                type="text" 
                                id="zip" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Zip Code" 
                            />
                        </div>
                    </div>
                    
                    {/* Payment Details Section */}
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardName">
                                Name on Card
                            </label>
                            <input 
                                type="text" 
                                id="cardName" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Name on Card" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                                Card Number
                            </label>
                            <input 
                                type="text" 
                                id="cardNumber" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Card Number" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                                Expiry Date
                            </label>
                            <input 
                                type="text" 
                                id="expiryDate" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="MM/YY" 
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                                CVV
                            </label>
                            <input 
                                type="text" 
                                id="cvv" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="CVV" 
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button 
                                type="submit" 
                                className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            >
                                Complete Purchase
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
