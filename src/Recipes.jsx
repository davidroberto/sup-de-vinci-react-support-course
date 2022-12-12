const Recipes = (props) => {

    
    return (
        <div>
            <h1>Recipes : </h1>
            <ul>
                {props.recipesFromApi.map((recipe) => (
                    <li key={recipe.id}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipes;