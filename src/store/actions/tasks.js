export const FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";
export const CREATE_TASK = "CREATE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const fetchTasksRequest = () => {
  return {
    type: FETCH_TASKS_REQUEST,
  };
};

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const fetchTasksFailure = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error,
  };
};

export const createTask = (taskName) => {
  return {
    type: CREATE_TASK,
    payload: taskName,
  };
};

export const completeTask = (taskId) => {
  return {
    type: COMPLETE_TASK,
    payload: taskId,
  };
};
