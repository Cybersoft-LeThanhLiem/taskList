import React from 'react'

export default function taskList() {
    return (
        <div className="bg-dark text-white h-100">
            <div className="container py-5">
                <div className="alert border border-white" role="alert">
                    Dark Theme
                </div>

                <form>
                    <h3 className="font-weight-light">To Do List</h3>
                    <div className="form-row mx-0">
                        <label>Task Name</label>
                    </div>
                    <div className="form-row form-group">
                        <div className="col">
                            <input type="text" className="form-control" />
                        </div>
                        <button className="col-md-2 btn btn-outline-light">
                            <i className="fa fa-plus"></i>
                            <span className="ml-2">Add Task</span>
                        </button>
                        <button className="col-md-2 btn btn-outline-light">
                            <i className="fa fa-upload"></i>
                            <span className="ml-2">Update Task</span>
                        </button>
                    </div>
                </form>

                <hr className="w-100 bg-white mt-5" />
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
