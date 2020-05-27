import React from 'react';
import styled from "@emotion/styled";
import AddToDo from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";
import {inject, observer} from "mobx-react";
import {NotificationStore} from "./stores";
import ModalWindow from "./Components/ModalWindow";

const Root = styled.div`
background: #282731;
width:100vw;
height: 100vh;
`
const Wrapper = styled.div`
width: 920px; 
margin: 0 auto;
background: #4F4E56;
position: relative;
`

interface IProps {
    notificationStore?: NotificationStore
}

@inject('notificationStore')
@observer
export default class App extends React.Component<IProps> {
    render() {
        return <Root>
            <Wrapper>
                <AddToDo/>
                <ToDoList/>
            </Wrapper>
            {this.props.notificationStore!.isOpenEditPage && <ModalWindow/>}
        </Root>

    }
}
