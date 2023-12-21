import React from "react";
import "./App.css";
import courseIndex from "./assets/data/all.json";

import {
 Header,
 Footer,
 Lesson,
 Vocabulary,
 Category,
} from "./components/Components";

var data = courseIndex.data;
var categories = data.map((x) => x);

console.log(categories);

function App() {
 return (
  categories.map((x, i) => {
   return (
    <>
     <Category key={i} category={x.category}>
      <Lesson lessons={x.lessons}>

        <div className="table-footer">
        {
        x.dialogues.map((e,i)=> {
         return (
          <div key={e.id} className="dialogues-col">
           <p className="col-title">Dialogues</p>
           <div>id: {e.id}</div>
           <div>name: {e.name}</div>
           <div>phrases: {e.countPhrases}</div>
           <div>Items {e.countItem}</div>
           <div>Words {e.countWords}</div>
          </div>
         );
        })
       }
       {
        x.vocabularies.map((v)=>{
         return(

          <div key={v.id} className="vocabularies-col">
           <p className="col-title">Vocabularies</p>
           <div>id: {v.id}</div>
           <div>Remote Url: {`https://www.modyly.com/v2/vocabularies/${v.id.toString()[0]}/${v.id}.json`}</div>
          </div>

         )
        })
       }
       </div>
      </Lesson>
     </Category>
     <Footer />
    </>
   )
  })
 )
}
export default App;
