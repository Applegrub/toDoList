import {SubStore, RootStore} from "./index";
import {action, observable} from "mobx";

export default class NotificationStore extends SubStore {

    @observable isOpenEditPage = false;



}
