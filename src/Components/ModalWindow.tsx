/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {inject, observer} from "mobx-react";
import {css, jsx} from "@emotion/core";

interface IProps {
    isOpened: boolean;
}

const Modal = styled.div`
position: absolute;
z-index: 1;
left: 160px;
top: 500px;
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
margin: 30px 0 0 200px;
height: 40px;
background: #3B3A43;
border-radius: 100px;
outline: none;
color: white;
`

@inject('todoStore')
@observer
export default class ModalWindow extends React.Component {
    render() {
        const isOpened = this.props;
        return <Modal css={css`display: ${isOpened ? 'block' : 'none'};`}>
            <H1>Custom&Homemade</H1>
            <H2>Меняй что хочешь</H2>
            <Input/>
            <Button>Добавить изменения</Button>
        </Modal>;
    }

}