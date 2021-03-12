import React from "react";
import { connect } from "react-redux";
import * as yup from 'yup';
import { withFormik, Field, Form } from "formik";
import { createTask, fetchTasksRequest } from "../store/actions/tasks";

function TodoForm() {

  return (
      <Form className="bg-light col-12 col-md-6 p-3">
        <div className="form-group">
          <label htmlFor="taskName" className="form-label col-12">
            Criar tarefa
          </label>
          <Field
            id="taskName"
            name="taskName"
            placeholder="Criar tarefa"
            className="form-control"
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add
        </button>
      </Form>
  );
}

const TodoFormWithFormik = withFormik({

  mapPropsToValues: value => {
    return {
      taskName: value.taskName || ''
    }
  },
  validationSchema: yup.object().shape({
    taskName: yup.string().required('Por favor entre com uma tarefa')
  }),
  handleSubmit: (value, formikBag) => {
    formikBag.props.createTask(value.taskName)
    formikBag.resetForm()
    formikBag.props.fetchTasksRequest()
  }
})(TodoForm)



export default connect(null, { createTask, fetchTasksRequest })(TodoFormWithFormik);
