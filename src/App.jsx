import "./App.css";
import all from "./assets/data/all.json";

function Category(props) {
  return (
    <div id={props.id} className="card">
      <div className="cat-header">
        <div>{props.id}</div>
        <div>{props.name}</div>
      </div>
    </div>
  );
}

function handleClick(e,id) {
  console.log(c.currentTarget,id);
}

function App() {
  const elems = [];
  const categories = all.data.map((x) => x.category);
  console.log("categories.length => ", categories.length);
  for (var i = 0; i < categories.length; i++) {
    elems[i] = <Category id={categories[i].id} name={categories[i].name} />;
  }
  document.querySelectorAll('.card').forEach(function f(c){
    c.addEventListener("click",handleClick(c,c.id))
  });
  return <div className="cats">{elems}</div>;
}


export default App;
