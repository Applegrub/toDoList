/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {TTodoItem} from "../stores/TodoStore"
import {NotificationStore, TodoStore} from "../stores";
import {inject, observer} from "mobx-react";
import {css, jsx} from "@emotion/core";

interface IProps {
    toDo: TTodoItem
    todoStore?: TodoStore
    notificationStore?: NotificationStore
}


const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fff;
  padding: 10px;
  color: #fff;
`
const Item = styled.div`
display: flex;
position: relative;
`
const Input = styled.input`
margin-right: 10px;
`

const DeleteButton = styled.button`
position: absolute;
margin-left: 90%;
background: #E85D58;
border-radius: 100px;
height: 30px;
`
const ChangeButton = styled.button`
color: white;
position: absolute;
margin-left: 80%;
background: #3B3A43;
border-radius: 100px;
height: 30px;
`

@inject('todoStore', 'notificationStore')
@observer
export default class ToDoItem extends React.Component<IProps> {

    handleOpenChangeDialog = () => {
        this.props.notificationStore!.isOpenEditPage = true
        this.props.notificationStore!.titleOfToDo = this.props.toDo.title
    }

    render() {
        const isCompleted = this.props.toDo.completed;
        const id = this.props.toDo.id;
        return <Root>
                    <Item css={css`text-decoration: ${isCompleted ? 'line-through' : 'none'};`}>
                          <Input type="checkbox"
                                 onChange={()=> this.props.todoStore!.handlerToDo(id)}/>
                          {this.props.toDo.title}
                          <DeleteButton
                              onClick={()=> this.props.todoStore!.deleteToDo(id)}>
                              Удалить
                          </DeleteButton>
                        <ChangeButton onClick={this.handleOpenChangeDialog}>
                            Изменить
                        </ChangeButton>
                      </Item>
              </Root>
    }
}
