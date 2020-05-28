import React from "react";
import styled from "@emotion/styled";
import {inject, observer} from "mobx-react";
import {NotificationStore, TodoStore} from "../stores";

interface IProps {
    notificationStore?: NotificationStore;
    toDoStore?: TodoStore
}
interface IState {
    title:string
}

const Root = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0,0,0,.5);
display: flex;
align-items: center;
justify-content: center;
`

const Modal = styled.div`
z-index: 1;
width: 600px;
height: 300px;
background: #4F4E56;
border-radius: 50px;
border: 5px solid white;
color: white;
`
const H1 = styled.h1`
margin-left: 140px;
width: 350px;
`
const H2 = styled.h2`
margin-left: 180px;
width: 250px;
`
const Input = styled.input`
margin-top: 30px;
margin-left: 50px;
width: 500px;
height: 30px;
border-radius: 100px;
`
const Button = styled.button`
font-size: 1em;
height: 40px;
background: #3B3A43;
border-radius: 100px;
outline: none;
color: white;
`
const ButtonSet = styled.div`
margin: 30px 0 0 250px;
width: 300px;
display: flex;
justify-content: space-between;
`

@inject('notificationStore', 'toDoStore')
@observer
export default class ModalWindow extends React.Component<IProps, IState> {

    state = {
        title: ''
    }

    handleClose = () => {
        this.props.notificationStore!.isOpenEditPage = false
    }

    handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({title: e.target.value});


    handleAdd = () => {
        const oldTitle:string = this.props.notificationStore!.titleOfToDo
        const newTitle:string =this.state.title
        this.props.toDoStore!.changeToDo(newTitle, oldTitle)}

    render() {
        const oldTitle = this.state.title
        return <Root>
            <Modal>
                <H1>Custom&Homemade</H1>
                <H2>Меняй что хочешь</H2>
                <Input
                    value = {oldTitle}
                    onChange={this.handleChangeInput}
                    placeholder = {this.props.notificationStore!.titleOfToDo}/>
                <ButtonSet>
                    <Button onClick={this.handleAdd}>Добавить изменения</Button>
                    <Button onClick={this.handleClose}>Закрыть</Button>
                </ButtonSet>
            </Modal>
        </Root>
    }

}
