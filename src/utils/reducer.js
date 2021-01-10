export const initialState = {
    courseList: []
  };
  
export function reducer(state, action) {
    switch (action.type) {
      case "addCourse":{
        return {
          courseList: [...state.courseList, action.value]
        };}
      case "deleteCourse":
        return {
          courseList: state.courseList.filter((list) => list.course_id !== action.payload)
        };
      default:
        throw new Error();
    }
  }
  