import {TodoStore} from "./index";

export default class RootStore {

    public todoStore: TodoStore;

    constructor() {
        this.todoStore = new TodoStore(this)
    }
}
