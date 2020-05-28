import {SubStore, RootStore, TodoStore} from "./index";
import {action, observable} from "mobx";


export default class NotificationStore extends SubStore {

    @observable isOpenEditPage = false;

    @observable titleOfToDo = '';


}
