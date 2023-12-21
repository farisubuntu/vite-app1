import "./Category.css";



function Category(props){
  const cat=props.category;

  return(
    <div className="cat-wrapper">
      <div className="row">
        <div className="col">CategoryID</div>
        <div className="col">Name</div>
        <div className="col">Count-Lessons</div>
        <div className="col">Count-Vocabulay</div>
        <div className="col">Count-Dialogue</div>

      </div>
      <div className="row">
        <div className="col">{cat.id}</div>
        <div className="col">{cat.name}</div>
        <div className="col">{cat.countLesson}</div>
        <div className="col">{cat.countDialogue}</div>
        <div className="col">{cat.countVocabulary}</div>
      </div>
      {props.children}

    </div>
  )
}

export default Category;