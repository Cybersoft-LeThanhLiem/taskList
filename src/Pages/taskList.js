import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import React from 'react';
import { TaskAction } from '../redux/actions/TaskAction';

export default function TaskList() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taskName: ''
        },

        validationSchema: Yup.object().shape({
            taskName: Yup.string().required('Task name cannot be empty')
        }),

        onSubmit: (values) => {
            console.log(values);
            const action = TaskAction(values);
            dispatch(action);
        }
    })

    const {handleChange, touched, errors} = formik;

    return (
        <div className="bg-dark text-white h-100">
            <div className="container py-5">
                <div className="alert border border-white" role="alert">
                    Dark Theme
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <h3 className="font-weight-light">To Do List</h3>
                    <div className="form-row mx-0">
                        <label>Task Name</label>
                    </div>
                    <div className="form-row form-group">
                        <div className="col">
                            <input name="taskName" type="text" className="form-control" onChange={handleChange} onBlur={formik.handleBlur} />
                        </div>
                        <button type="submit" className="col-md-2 btn btn-outline-light">
                            <i className="fa fa-plus"></i>
                            <span className="ml-2">Add Task</span>
                        </button>
                        <button className="col-md-2 btn btn-outline-light">
                            <i className="fa fa-upload"></i>
                            <span className="ml-2">Update Task</span>
                        </button>
                    </div>
                    {touched.taskName && errors.taskName && <p className="text text-danger">{errors.taskName}</p>}
                </form>

                <hr className="w-100 bg-white mt-4" />
                <div>
                    <h3 className="font-weight-light">Task To Do</h3>
                </div>

                <div>
                    <h3 className="font-weight-light">Task Completed</h3>
                </div>
            </div>
        </div>
    )
}
