import React from "react";
import styled from "@emotion/styled";
import {TTodoItem} from "../stores/TodoStore";

interface IProps {
    toDo: TTodoItem
}

interface IState {

}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fff;
  padding: 10px;
  color: #fff;
`

export default class ToDoItem extends React.Component<IProps, IState> {

    render() {
        return <Root>
            {this.props.toDo.title}
        </Root>
    }
}
