import React, { Component } from 'react'

class ListTodosComponent extends Component {
    constructor() {
        super()
        this.state = {
            todos:
            [ 
                {id:1, description: "Learn React", done: false, date: new Date()},
                {id:2, description: "Learn Java", done: false, date: new Date()},
                {id:3, description: "Learn Python", done: false, date: new Date()},
                {id:4, description: "Learn Bharathanatyam", done: false, date: new Date()}
            ]
        }
    }

    render() {
        return (
            <>
                <h1>List ToDos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Description</td>
                                <td>Completed?</td>
                                <td>Target Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.date.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )        
    }
}

export default ListTodosComponent