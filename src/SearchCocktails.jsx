import { useState } from "react";

const SearchCocktails = () => {

    // on créé un state cocktails qui contient un tableau vide
    // ça retourne la valeur du state cocktails actuel
    // et une fonction pour modifier cette valeur
    const [cocktails, setCocktails] = useState([]);

    // on créé un event listener appelé quand on click sur le bouton submit
    // cet event listener prend par défaut un objet event en paramètre
    // cet objet nous permet d'empecher le rechargement de la page (preventDefault)
    // et de récupérer la valeur de l'input

    // une fois qu'on a la valeur de l'input, on fait un appel
    // fetch pour récupérer les données liées à la recherche

    // on stocke ensuite les données dans le state cocktails
    // grâce à la fonction setCocktails
    // quand on appelle setCocktails, le composant se re-rend (c'est à dire
    // qu'il re-exécute la fonction SearchCocktails)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value;

        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
        const cocktailsData = await response.json();

        setCocktails(cocktailsData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type="text" name="search" placeholder="Search for a cocktail" />
                <button type="submit">Search</button>
            </form>

            {cocktails.drinks && cocktails.drinks.map((cocktail) => {
                return (
                    <div>
                        <h1>{cocktail.strDrink}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchCocktails;