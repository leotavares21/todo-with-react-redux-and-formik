import * as Types from "../../actions/tasks";

const initialState = {
  tasks: [],
  error: "",
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_TASKS_REQUEST:
      return {
        ...state,
        error: "",
      };
    case Types.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      };
    case Types.FETCH_TASKS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case Types.CREATE_TASK:
      return {
        ...state,
      };
    case Types.COMPLETE_TASK:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default tasksReducer;
