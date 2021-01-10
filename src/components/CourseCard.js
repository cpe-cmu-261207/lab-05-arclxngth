import { useReducer, useContext } from "react";
import { initialState, reducer } from "../utils/reducer.js";
import { AllContext } from "../App"

const CourseCard = (props) => {

  const onDeleteCourse = useContext(AllContext)

  return (
    <>
    <div className={"statementElement statementElement-" + props.semister} onClick={() => onDeleteCourse(props.course_id)}>
      <aside className="statement-id">{props.course_id}</aside>
      <aside>GRADE: {props.grade_txt}</aside>
      <aside>CREDIT: {props.credit}</aside>
    </div>
    </>
  );
};

export default CourseCard;
