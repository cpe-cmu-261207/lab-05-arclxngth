import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState, useReducer } from "react";
import { initialState, reducer } from "../utils/reducer.js"

class CourseList {
  constructor(id, name, credit, grade, grade_txt, semister) {
    this.id = id;
    this.name = name;
    this.credit = credit;
    this.grade = grade;
    this.grade_txt = grade_txt;
    this.semister = semister;
  }
}

const CourseForm = () => {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [credit, setCredit] = useState(0);
  const [grade, setGrade] = useState(0);
  const [semister, setSemister] = useState(0);

  const [courseList, setCourseList] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState)

  function btn_sw(e) {
    // className.replace("credit-1, credit-2")
    // e.value = 2;
  }

  function addCourse(event){
    event.preventDefault();

    let grade_txt = "";
      switch(grade){
        case "4": grade_txt = "A"; break;
        case "3.5": grade_txt = "B+"; break;
        case "3": grade_txt = "B"; break;
        case "2.5": grade_txt = "C+"; break;
        case "2": grade_txt = "C"; break;
        case "1.5": grade_txt = "D+"; break;
        case "1": grade_txt = "D"; break;
        case "0": grade_txt = "F"; break;
        case "-1": grade_txt = "W"; break;
      }


    var course = new CourseList(id, name, credit, grade, grade_txt, semister);

    dispatch({
      type: "addCourse",
      payload: {
        id: Date.now()
        // name: course; 
      }
    })
  }

  return (
    <>
      <form>
        <div>
          <div className="input-template">
            <input className="input-form" placeholder="Course's ID" onChange={(e) => setID(e.target.value)}></input>
          </div>
          <div className="input-template">
            <input className="input-form" placeholder="Course's Name" onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="input-template3">
            <form>
              <input
                type="radio"
                id="semister-1"
                value="1"
                name="semister"
                className="checkbox"
                onChange={setSemister(1)}
              ></input>
              <label for="semister-1">SEMISTER 1</label>
              <input
                type="radio"
                id="semister-2"
                value="2"
                name="semister"
                className="checkbox"
                onChange={setSemister(2)}
              ></input>
              <label for="semister-2">SEMISTER 2</label>
            </form>
          </div>
          <div className="input-template2">
            <div>
              <input
                type="button"
                className="credit-btn credit-1"
                value="1"
                onClick={(e) => btn_sw(e.target.value)}
                onChange={(e) => setCredit(e.target.value)}
              ></input>
            </div>
            <div>
              <select className="grade-btn" onChange={(e) => setGrade(e.target.value)}>
                <option value="-1" selected>
                  Select Grade...
                </option>
                <option value="4">A</option>
                <option value="3.5">B+</option>
                <option value="3">B</option>
                <option value="2.5">C+</option>
                <option value="2">C</option>
                <option value="1.5">D+</option>
                <option value="1">D</option>
                <option value="0">F</option>
                <option value="-2">W</option>
              </select>
            </div>
          </div>
          <div className="input-template">
            <button className="submit-btn" onClick={addCourse}>SUBMIT</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CourseForm;
