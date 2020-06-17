import {observable , action } from 'mobx'
import TodoModel from './TodoModel'

class TodoStore{
    @observable todos = [
        {
            title: "todo1",
            id: 1 ,
            completed: true
        },
        {
            title: "todo2",
            id: 2 ,
            completed: false
        }
    ]
    lastId = 3

    @action
    addTodo(title){
        this.todos.push(new TodoModel(this , title , false , this.lastId++))
    }

}
const store = new TodoStore()
export default store