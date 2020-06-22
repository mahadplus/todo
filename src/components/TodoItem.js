import React, { Component } from "react"


class TodoItem extends Component {
    render() {
        const {todo} = this.props
        return (
            <li className={todo.completed ? 'completed' : ''}>
                <div className="view">
                    <input 
                        type="checkbox" 
                        className="toggle" 
                        value="on" 
                        checked={todo.completed} 
                    />
                        <label>{todo.title}</label>
                        {console.log("a:"+todo.title)}
                        <button className="destry" />
                </div>
            </li>

        )
    }
}
export default TodoItem