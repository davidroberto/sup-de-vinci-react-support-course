// le composant ShowArticle récupère l'article passé en "props"
// grâce à la syntaxe props.currentArticle (currentArticle correspond à la clé de l'objet passé en props
// dans le composant ListArticles)


// séparer le composant Articles en deux composants : un composant ListArticles et un composant ShowArticle
// le composant ListArticles s'occupe uniquement de récupérer les articles sur une api (ici juste créer la variable articles, donc un fake appel d'api)
// il faut la boucle sur tous les articles
// pour chaque article, on utilise un composant ShowArticle dont l'unique rôle est d'afficher un seul article

const ShowArticle = (props) => {

    const article = props.currentArticle;

    return (
        <article key={article.id}>
            <h1>{article.title}</h1>
            <h2>{article.subtitle}</h2>
            <p>{article.content}</p>
            <i>{article.date.toDateString()}</i>
            <img src={article.image} alt={article.title} />
        </article>
    );

}

export default ShowArticle;