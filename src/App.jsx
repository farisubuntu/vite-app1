import ArticleView from "./ArticleView";
import "./App.css";
import articles from "./data/transformer/articles";

function App() {
  return (
    <>
      <h1>Electronic Components Introduction</h1>
      <hr />
      {articles.map((article) => (
        <ArticleView key={article.id} title={article.title}>
          {article.content}
        </ArticleView>
      ))}
    </>
  );
}

export default App;
