import React from "react";
import ToDoItem from "./ToDoItem";
import styled from "@emotion/styled";
import { ToDoStore } from "../stores";
import { inject, observer } from "mobx-react";

export interface IProps {
    toDoStore?: ToDoStore
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: -5px;
  
  & > * {
  margin: 5px;
  }
  
`

@inject('toDoStore')
@observer
class ToDoList extends React.Component<IProps> {

    render() {
        const { toDos } = this.props.toDoStore!;
        return <Root>{
            toDos.map((toDo, i) => <ToDoItem toDo={toDo} key={i} />)
        }</Root>
    }

}

export default ToDoList
