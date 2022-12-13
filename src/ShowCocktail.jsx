const ShowCocktail = (props) => {

    const cocktailData = props.cocktail.drinks[0];


    const getIngredients = () => {

        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
            if (cocktailData[`strIngredient${i}`]) {
                ingredients.push(cocktailData[`strIngredient${i}`]);
            }
        }
        return ingredients;

    }

    return (
        <div>
            <h1>{cocktailData.strDrink}</h1>

            {getIngredients().map((ingredient, index) => {
                return (
                    <div key={index}>
                        <p>{ingredient}</p>
                    </div>
                )
            })}
        </div>
    );
}


export default ShowCocktail;