const CocktailSearchForm = (props) => {
    return (
        <form onSubmit={props.formCallback}> 
            <input type="text" name="search" placeholder="Search for a cocktail" />
            <button type="submit">Search</button>
        </form>
    )
}

export default CocktailSearchForm;