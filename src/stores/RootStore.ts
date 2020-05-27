import {NotificationStore, TodoStore} from "./index";

export default class RootStore {

    public todoStore: TodoStore;
    public notificationStore: NotificationStore;

    constructor() {
        this.todoStore = new TodoStore(this)
        this.notificationStore = new NotificationStore(this)
    }
}
