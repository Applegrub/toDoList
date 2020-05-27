import {SubStore, RootStore} from "./index";
import {action, observable} from "mobx";

const initData: TTodoItem[] = [
    {
        'id': 0,
        "completed": false,
        "title": "Некая задача"
    }
];

export type TTodoItem = {
    id:number
    completed: boolean
    title: string
}


export default class TodoStore extends SubStore {

    @observable toDos: TTodoItem[] = [];

    @action addTodo = (title: string) => this.toDos.push({
        id: this.toDos.length,
        title,
        completed: false
    });

    @action deleteToDo = (id:number) =>{
        this.toDos = this.toDos.filter(toDo => toDo.id !== id)
    }
    @action handlerToDo = (id:number) =>{
        this.toDos[id].completed = !this.toDos[id].completed;
        console.log(this.toDos[id].completed)
    }
    @action changeToDo = (id: number) =>{
        const newToDo = prompt('Изменить задачу', this.toDos[id].title)
        return  this.toDos.map(toDo =>{
            if (toDo.id === id) {
                if (newToDo != null) {
                    toDo.title = newToDo;
                }
            }
        })
    }
    constructor(rootStore: RootStore) {
        super(rootStore);
        this.toDos = initData
    }


}
