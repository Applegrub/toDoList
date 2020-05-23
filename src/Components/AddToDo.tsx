/** @jsx jsx */
import React from "react"
import styled from "@emotion/styled";
import {TodoStore} from "../stores";
import {inject, observer} from "mobx-react";
import {css, jsx} from "@emotion/core";

const Wrapper = styled.div`
background: #212029;
padding: 30px 40px;
color: white;
justify-content: center;
text-align: center;
`

const Input = styled.input`
width: 600px;
height: 30px;
border-radius: 100px;
`

const Button = styled.button`
height: 40px;
background: #3B3A43;
border-radius: 100px;
outline: none;
color: white;
`

export interface IProps {
    todoStore?: TodoStore
}

interface IState {
    title: string,
    isValid: boolean
}

@inject('todoStore')
@observer
class AddToDo extends React.Component<IProps, IState> {

    state = {
        title: '',
        isValid: true
    };

    handleAdd = () => {
        if (this.state.title !== '') {
            this.props.todoStore!.addTodo(this.state.title);
            this.setState({title: '', isValid: true})
        } else {
            this.setState({isValid: false})
        }
    }


    handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({title: e.target.value, isValid: e.target.value !== ''});

    render() {
        const {isValid, title} = this.state
        return <Wrapper>
            <h1>Список дел</h1>
            <Input
                onChange={this.handleChangeInput}
                value={title}
                placeholder="Введите новое дело..."
                css={css`border: 1px solid ${isValid ? 'transparent' : 'red'};`}
            />
            <Button onClick={this.handleAdd}>Добавить</Button>
        </Wrapper>
    }
}


export default AddToDo;
