const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-8 mt-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md focus:outline-none">
                            Sign in for more access
                        </button>
                    </div>
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                        <div className="socialMedia">
                        </div>
                    </div>
                    <div className="w-full sm:w-auto">
                        <div className="links grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <a href="#" className="text-gray-300 hover:text-white">Catalogue de pièces</a>
                            <a href="#" className="text-gray-300 hover:text-white">Marques populaires</a>
                            <a href="#" className="text-gray-300 hover:text-white">Blog/Articles</a>
                            <a href="#" className="text-gray-300 hover:text-white">Services</a>
                            <a href="#" className="text-gray-300 hover:text-white">Contactez-nous</a>
                            <a href="#" className="text-gray-300 hover:text-white">FAQ</a>
                            <a href="#" className="text-gray-300 hover:text-white">Retours et Politique de garantie</a>
                            <a href="#" className="text-gray-300 hover:text-white">Promotions et Offres spéciales</a>
                        </div>
                    </div>
                </div>
                <div className="copy text-center text-gray-300 mt-8">
                    &copy; 2024 by DALIA.com
                </div>
            </div>
        </div>
    );
}

export default Footer;
