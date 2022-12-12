// créer un composant qui affiche un cocktail random
// de l'API https://www.thecocktaildb.com/api.php

import { useState } from "react";

// composant doit faire un appel fetch 
// stocker le résultat de l'appel dans une variable
// et on va (essayer de) afficher la recette dans notre composant


const RandomCocktail = () => {

    // je créé une variable d'état avec useState
    // la valeur de cette variable sera stockée en dehors de ma fonction de composant
    // de cette manière elle n'est pas affectée par la re-execution de la fonction

    // use State nous permet de définir une valeur par défaut pour la varaible d'état (ici null)
    // et de définir une fonction qui va nous permettre de modifier cette valeur
    // a noter : à chaque fois que cette fonction est appelée, le composant est re-rendu (la fonction est re-executée)
    const [coktailRandomData, setCoktailRandomData] = useState(null);


    // je définis une fonction qui sera appelée au click sur le bouton
    // cette fonction fait un appel fetch à l'API
    // récupère les donénes et les stocks dans la variable d'état
    // le fait de modifier la valeur de la variable d'état avec setCoktailRandomData
    // va déclencher le re-rendu du composant
    const handleClick = async () => {
        const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const coktailRandomResponseData = await cocktailResponse.json();
        setCoktailRandomData(coktailRandomResponseData);
    }

    return (
        <div>
            <button onClick={handleClick}>Afficher une recette random</button>
            {coktailRandomData ? (
                <div>
                    <h1>{coktailRandomData.drinks[0].strDrink}</h1>
                </div>
            ) : (
                <div>
                    <h1>Recette en attente de chargement</h1>
                </div>
            )}
        </div>
    );
};

export default RandomCocktail;
