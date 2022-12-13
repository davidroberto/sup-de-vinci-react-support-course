import { useEffect, useState } from "react";

const ListCocktails = () => {

    const [cocktailsData, setCocktailsData] = useState([]);

    useEffect(() => {
        (async () => {
            const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
            const cocktailsResponseData = await cocktailResponse.json();
            setCocktailsData(cocktailsResponseData.drinks);
        })();
    }, [])

    return (
        <div>
            {cocktailsData.map((cocktail) => {
                return (
                    <div>
                        <h2>{cocktail.strDrink}</h2>
                    </div>
                )
            })}
        </div>
    );
}

export default ListCocktails;