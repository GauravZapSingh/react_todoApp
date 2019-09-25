import React from 'react'

function TodoCheckbox(props) {

    const completedStyle = {
        fontStyle: 'italic',
        color: 'gray',
        textDecoration: 'line-through'
    }

    return (
        <div className="form-check d-flex justify-content-around align-items-center">
            <div className="todo-item">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={props.completed}
                    onChange={() => props.checkChange(props.newTask.id)}
                >
                </input>
                <label className="form-check-label" style={props.completed ? completedStyle : null}>{props.task}</label>
            </div>
            <div className="todo-action">
                <button
                    type="button"
                    className="btn btn-danger"
                    id={props.id}
                    onClick={() => props.deleteTask(props.newTask.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button
                    type="button"
                    className="btn btn-success ml-2"
                    id={props.id}
                    onClick={() => props.editTask(props.newTask.id)}
                >
                    <i className="fas fa-edit"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoCheckbox