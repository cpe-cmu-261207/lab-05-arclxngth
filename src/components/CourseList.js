import CourseCard from "./CourseCard"

const CourseList = ({ list }) => (
    <div className="">
      {list.map((course) => (
        <CourseCard 
        key={Date.now()} 
        id={course.course_id} 
        name={course.name} 
        credit={course.credit} 
        grade={course.grade_txt} 
        semister={course.semister}/>
      ))}
    </div>
  );
  
  export default CourseList;