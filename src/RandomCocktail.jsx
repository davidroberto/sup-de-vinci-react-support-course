import { useEffect, useState } from "react";
import ShowCocktail from "./ShowCocktail";

const RandomCocktail = () => {

    // permet de créer une variable coktailRandomData
    // ça stocke la valeur en dehors du composant
    // et ça permet de mettre à jour la valeur de cette variable
    const [coktailRandomData, setCoktailRandomData] = useState(null);

    // use effect c'est une fonction que react fournit
    // sera executée qu'une seule fois
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
