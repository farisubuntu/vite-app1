import "./Lesson.css"

// import * as jsdonData from "../../assets/data/all.json";

//  /vocabulary/201.json";

function Lesson(props) {
  return (
      <div className="content">
        <table className="table table-primary  table-striped-columns table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Lesson ID</th>
              <th scope="col">Lesson Name</th>
              <th scope="col">CategoryID</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {
              props.lessons.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.categoryID}</td>
                  </tr>
                )
              })

            }

          </tbody>
        </table>
        {props.children}
      </div>
  );
}

export default Lesson;