import { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "./utils/reducer.js";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList"


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  function renderCourse(){
    state.forEach((list) => {
      <CourseCard 
        course_id={list.course_id}
        grade_txt={list.grade_txt}
        credit={list.credit}
        semister={list.semister}
      />
    })
  }
    

  // function calculateGPA() {
  //   let score = 0,
  //     sum_credit = 0;
  //   myCourses.forEach((value) => {
  //     if(value.grade == "-1") ;
  //     else{
  //       score += value.grade * value.credit;
  //       sum_credit += value.credit;
  //     }
  //   });

  //   let gpa = score / sum_credit;

  //   if(sum_credit == 0) gpa = 0

  //   return gpa.toFixed(2);
  // } 

  // useEffect(() => {
  //   calculatGPA();
  // }, [CourseList.length])

  return (
    <div>
      <div className="header">
          <h1>GPA CALCULATOR</h1>
      </div>
      {/* TODO ADD UI */}
      <div>
        <p>DEBUG : {JSON.stringify()}</p>
      </div>
      <div className="form">
        <label className="topic">
              COURSE LIST
        </label>
        <label className="topic">
              COURSE FORM
        </label>
        <div className="courseCard-template">
          {renderCourse()}
        </div>
        <div className="courseForm-template">
          <CourseForm/>
        </div>
      </div>
      <div className="grade-template grade-display">
        <div>GPA</div>
        <div className="grade-number">4.00</div>
      </div>
    </div>
  );
}

export default App;
