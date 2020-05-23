import React from "react";
import ToDoItem from "./ToDoItem";
import styled from "@emotion/styled";
import {TodoStore} from "../stores";
import {inject, observer} from "mobx-react";

export interface IProps {
    todoStore?: TodoStore
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: -5px;
  
  & > * {
  margin: 5px;
  }
  
`

@inject('todoStore')
@observer
class ToDoList extends React.Component<IProps> {

    render() {
        const {toDos} = this.props.todoStore!;
        return <Root>{
            toDos.map((toDo, i) => <ToDoItem toDo={toDo} key={i}/>)
        }</Root>
    }

}

export default ToDoList
