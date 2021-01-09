export const initialState = {
    courseList: [],
  };
  
export function reducer(state, action) {
    switch (action.type) {
      case "addCourse":
        return {
          ...state,
          courseList: [...state.courseList, action.payload],
        };
      case "deleteCourse":
        return {
          ...state,
          courseList: state.courseList.filter((list) => list.id !== action.payload),
        };
      default:
        throw new Error();
    }
  }
  