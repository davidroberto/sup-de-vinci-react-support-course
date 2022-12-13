import Footer from "./Footer";
import Header from "./Header";
import ListCocktails from "./ListCocktails";
import RandomCocktail from "./RandomCocktail";


function App() {

  // 1) créer composant ListCocktails qui affiche tous les cocktails
  // 2) refactoriser et appeler le composant ShowCocktail dans ListCocktails

  return (
    <div>
      <Header />
      <RandomCocktail />
      <ListCocktails />

      <Footer />
    </div>
  );

}

export default App;
