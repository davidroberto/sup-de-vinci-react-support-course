import ShowArticle from "./ShowArticle";

const ListArticles = () => {

    const articles = [
        {
            title: "Titre de l'article 1",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 1",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 1",
            id: 1
        },
        {
            title: "Titre de l'article 2",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 2",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 2",
            id: 2
        },
        {
            title: "Titre de l'article 3",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 3",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 3",
            id: 3
        },
      ];


    // Le composant ShowArticle doit afficher un seul article
    // il construit le JSX pour un seul article
    // pour pouvoir l'afficher, il a besoin de l'article actuel
    // donc quand on appele le comoosant ShowArticle, on lui passe
    // en "props" l'article actuel
    return(
        <section>
            {articles.map((article) => {
                return (
                    <ShowArticle currentArticle={article} test="test1" />
                )
            })}
        </section>

    );
}

export default ListArticles;