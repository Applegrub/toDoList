import {RootStore, SubStore} from "./index";
import {action, observable} from "mobx";

export type TToDoItem = {
    id: number;
    completed: boolean;
    title: string;
};

export default class ToDoStore extends SubStore {
    @observable toDos: TToDoItem[] = [];

    @action addTodo = (title: string) =>{
        this.toDos.push({
            id: this.toDos.length,
            title,
            completed: false,
        });
}
    @action deleteToDo = (id: number) => {
        this.toDos = this.toDos.filter((toDo) => toDo.id !== id);
    };
    @action handlerToDo = (id: number) => {
        this.toDos[id].completed = !this.toDos[id].completed;
        console.log(this.toDos[id].completed);
    };
    @action changeToDo = (newTitle: string, oldToDo: string) => {
        return this.toDos.map((toDo) => {
            if (toDo.title === oldToDo) {
                toDo.title = newTitle;
            }
        });
    };

    constructor(rootStore: RootStore, initState: any) {
        super(rootStore);
        if (initState && initState.toDos && Array.isArray(initState.toDos)) {
            this.toDos = initState.toDos;
        }
    }
}
