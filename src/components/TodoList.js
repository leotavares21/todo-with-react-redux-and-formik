import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TasksActions from "../store/actions/tasks";

function TodoList({ tasks, fetchTasksRequest, completeTask }) {
  useEffect(() => {
    fetchTasksRequest();
  }, [fetchTasksRequest, completeTask]);

  return (
    <div className="col-12 col-md-6 mt-3">
      {tasks.map((task) => (
        <ul className="list-group" key={task._id}>
          <li className="list-group-item mb-2 d-flex justify-content-between align-items-center">
            {task.name}
            {task.completed ? (
              <button className="btn btn-secondary" disabled>
                Concluído
              </button>
            ) : (
              <button
                className="btn btn-danger"
                onClick={() => completeTask(task._id)}
              >
                Concluir
              </button>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasksReducer.tasks,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TasksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
