const CocktailSearchResults = (props) => {
    return (
        <div>
            {props.results.drinks && props.results.drinks.map((cocktail) => {
                return (
                    <div>
                        <h1>{cocktail.strDrink}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default CocktailSearchResults;