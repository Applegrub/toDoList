import { NotificationStore, ToDoStore } from "./index";

export default class RootStore {
  public toDoStore: ToDoStore;
  public notificationStore: NotificationStore;

  constructor() {
    this.toDoStore = new ToDoStore(this);
    this.notificationStore = new NotificationStore(this);
  }
}
