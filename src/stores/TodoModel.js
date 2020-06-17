import {observable , action} from 'mobx'

export default class TodoModel {
    store
    id
    @observable title
    @observable completed

    constractor(store , title , completed , id){
        this.id = id 
        this.title = title 
        this.complited = completed
        this.store = store
    }

    @action
    toggle(){
        this.completed = !this.completed
    }
}