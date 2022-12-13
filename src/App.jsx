import Footer from "./Footer";
import Header from "./Header";
import ListCocktails from "./ListCocktails";
import RandomCocktail from "./RandomCocktail";
import SearchCocktails from "./SearchCocktails";


function App() {

  // 1) créer composant ListCocktails qui affiche tous les cocktails
  // 2) refactoriser et appeler le composant ShowCocktail dans ListCocktails

  return (
    <div>
      <Header />
      <RandomCocktail />
      <ListCocktails />
      <SearchCocktails />
      <Footer />
    </div>
  );

}

export default App;
