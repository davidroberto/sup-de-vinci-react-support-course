// le composant ShowArticle récupère l'article passé en "props"
// grâce à la syntaxe props.currentArticle (currentArticle correspond à la clé de l'objet passé en props
// dans le composant ListArticles)

const ShowArticle = ({props}) => {

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