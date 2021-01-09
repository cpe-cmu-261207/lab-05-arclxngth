import { useReducer } from "react";
import { initialState, reducer } from "../utils/reducer.js";

const CourseCard = (props) => {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  function deleteCourse (id){
    dispatch({
      type: "deleteCourse",
      payload: id
    })
  }

  function sem_set(){
    
  }

  return (
    <>
    <div className="statementElement statementElement-1" onClick={() => props.deleteCourse(props.course_id)}>
      {/* <aside className="statement-id">261207</aside>
      <aside>GRADE: A</aside>
      <aside>CREDIT: 3</aside> */}
      <aside className="statement-id">{props.course_id}</aside>
      <aside>GRADE: {props.grade_txt}</aside>
      <aside>CREDIT: {props.credit}</aside>
    </div>
    </>
  );
};

export default CourseCard;
