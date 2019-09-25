import React from 'react'
import TodoCheckbox from './TodoCheckbox'
import TodoData from './TodoData'
// import CondRenderingComp from './CondRenderingComp'

class Todo extends React.Component {

    // 1. Using state mapping
    constructor() {
        super()
        this.state = {
            todos: TodoData,
            isLoading: true,
            title: "",
            isEdit: false,
            isEmpty: false
        }
        this.checkChange = this.checkChange.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        // this.editTask = this.editTask.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 500)
    }

    checkChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
            isEmpty: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // this.props.addTodo(this.state.title)
        // this.setState({
        //     title: ''
        // })
        // const newTitle = this.state.title;
        // let i = 4;
        // i = i + 1;
        // let incrementId = i;
        if (this.state.title === "") {
            // alert("Empty")
            this.setState({
                isEmpty: true
            })
        } else {
            const newTitle = {
                id: Date.now(),
                task: this.state.title,
                completed: false
            }

            this.setState({
                // todos: updatedTodo,
                todos: [...this.state.todos, newTitle],
                title: "",
                isEdit: false,
                isEmpty: false
            })
        }
        // alert(newTitle)
        // newTitle.push(event)
        // const updatedTodo = [...this.state.todos]
        // updatedTodo.push(event, newTitle)   
    }

    deleteTask(id) {
        // alert(id);
        // const removeTodo = [...this.state.todos]
        // console.log(removeTodo);
        const updatedList = this.state.todos.filter(todo => todo.id !== id)
        // console.log(updatedList);
        this.setState({
            todos: updatedList
        })
    }

    editTask = (id) => {
        const updatedList = this.state.todos.filter(todo => todo.id !== id)
        const editTitle = this.state.todos.find(item => item.id === id)
        console.log(editTitle);
        this.setState({
            todos: updatedList,
            title: editTitle.task,
            isEdit: true
        })
    }

    handleClear = (e) => {
        e.preventDefault();
        this.setState({
            todos: []
        })
    }

    clearChecked = completed => {
        completed.preventDefault();
        const updatedList = this.state.todos.filter(item => item.completed !== true)
        // console.log(updatedList);
        this.setState({
            todos: updatedList
        })
    }

    render() {
        const TodoTask = this.state.todos.map(newTask =>
            <TodoCheckbox key={newTask.id}
                task={newTask.task}
                completed={newTask.completed}
                newTask={newTask}
                checkChange={this.checkChange}
                newTodo={this.state.newTodo}
                deleteTask={this.deleteTask}
                editTask={this.editTask} />
        )

        const emptyField = {
            borderColor: 'red',
            width: '90%'
        }

        return (
            <div>
                {this.state.isLoading ?
                    <div>
                        <h2 className="state-msg">Hold On....</h2>
                        <p>Loading your To-Do List</p>
                    </div> :
                    <form className="form-control">
                        {TodoTask}
                        <input
                            className="form-control form-input"
                            // style={{ width: '90%' }}
                            style={this.state.isEmpty ? emptyField : { width: '90%' }}
                            type="text"
                            placeholder="Add Todo"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                        {this.state.isEmpty ?
                            <div style={{color: 'red'}}>This field cannot be empty</div> :
                            null}
                        <div className="m-4">
                            {this.state.isEdit ?
                                <button className="btn btn-success" onClick={this.handleSubmit}>Update</button> : <button className="btn btn-primary" onClick={this.handleSubmit}>Add</button>}
                            {/* <button className="btn btn-primary" onClick={this.handleSubmit}>Add</button> */}
                            <button className="btn btn-danger ml-3" onClick={this.handleClear}>Delete All</button>
                            <button className="btn btn-danger ml-3" onClick={this.clearChecked}>Delete Checked</button>
                        </div>
                    </form>
                }
            </div>
        )
    }
}

// 2. Using function mapping

// function Todo_1() {
//     const TodoTask = TodoData.map(newTask => <Todo_checkbox key={newTask.id} task={newTask.task} completed={newTask.completed} />)

//     return (
// <form className="form-control">
//             {TodoTask}
//         </form>
//     )
// }

export default Todo