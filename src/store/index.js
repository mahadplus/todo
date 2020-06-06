import {observable , action} from "mobx"

class Store {
    @observable time
    
    constructor(){
        this.time = new Date()
        this.interval = setInterval(() => {
            this.time = new Date()
        },1000)
    }
}

const store = new Store()
export default store