export const initialState = {
    courseList: [],
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case "addCourse":
        return {
          ...state,
          myTodos: [...state.myTodos, action.payload],
        };
      case "deleteCourse":
        return {
          ...state,
          myTodos: state.myTodos.filter((list) => list.id !== action.payload),
        };
      default:
        throw new Error();
    }
  }
  