import { useEffect, useState } from "react";
import ShowCocktail from "./ShowCocktail";

const RandomCocktail = () => {
    const [coktailRandomData, setCoktailRandomData] = useState(null);

    useEffect(() => {
        (async () => {
            const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
            const coktailRandomResponseData = await cocktailResponse.json();
            setCoktailRandomData(coktailRandomResponseData);
        })();
    }, []);


    return (
        <div>

            {coktailRandomData && (
                <ShowCocktail cocktail={coktailRandomData} />
            )}
        </div>
    );
};

export default RandomCocktail;
