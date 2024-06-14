const Cover = () => {
    return ( 
        <div className="h-[87vh] bg-red-600"
        style={{
            backgroundImage: `url(/cover.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            fontFamily: "fantasy"
        }}
        >
            <div className="text-center text-white p-4 bg-opacity-50 bg-black rounded">
                <p className="text-4xl font-bold mb-4 ">Bienvenu chez DALIA</p>
                <p className="text-2xl">Votre destination pour les meilleures pièces automobiles</p>
            </div>
        </div>
    );
}

export default Cover;