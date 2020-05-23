import {SubStore, RootStore} from "./index";
import {action, observable} from "mobx";

const initData: TTodoItem[] = [
    {
        "completed": false,
        "title": "Некая задача"
    }
];

export type TTodoItem = {
    completed: boolean
    title: string
}


export default class TodoStore extends SubStore {

    @observable toDos: TTodoItem[] = [];

    @action addTodo = (title: string) => this.toDos.push({
        title,
        completed: false
    });

    constructor(rootStore: RootStore) {
        super(rootStore);
        this.toDos = initData
    }


}
