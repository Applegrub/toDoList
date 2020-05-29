import {NotificationStore, ToDoStore} from "./index";

export default class RootStore {
    public toDoStore: ToDoStore;
    public notificationStore: NotificationStore;

    constructor(initState: any) {
        this.toDoStore = new ToDoStore(this, initState && initState.toDoStore);
        this.notificationStore = new NotificationStore(this);
    }

    public serialize = () => ({
        toDoStore: {toDos: this.toDoStore.toDos}
    })
}
