import { SubStore, RootStore} from "./index";
import { action, observable } from "mobx";

const initData: TToDoItem[] = [
  {
    id: 0,
    completed: false,
    title: "Некая задача",
  },
];

export type TToDoItem = {
  id: number;
  completed: boolean;
  title: string;
};

export default class ToDoStore extends SubStore {
  @observable toDos: TToDoItem[] = [];

  @action addTodo = (title: string) =>
    this.toDos.push({
      id: this.toDos.length,
      title,
      completed: false,
    });

  @action deleteToDo = (id: number) => {
    this.toDos = this.toDos.filter((toDo) => toDo.id !== id);
  };
  @action handlerToDo = (id: number) => {
    this.toDos[id].completed = !this.toDos[id].completed;
    console.log(this.toDos[id].completed);
  };
  @action changeToDo = (newTitle: string, oldToDo: string) => {
    const newToDo = this.toDos.map((toDo) => {
      if (toDo.title === oldToDo) {
        toDo.title = newTitle;
      }
    });
    return newToDo;
  };
  constructor(rootStore: RootStore) {
    super(rootStore);
    this.toDos = initData;
  }
}
