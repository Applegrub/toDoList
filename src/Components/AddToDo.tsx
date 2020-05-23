import React, {useState} from "react"
import styled from "@emotion/styled";

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
`

function AddToDo() {
    return (
        <Wrapper>
            <h1>Список дел</h1>
            <Input type="text" placeholder="Введите новое дело..."/>
            <Button type="submit">Добавить</Button>
        </Wrapper>
    )
}

export default AddToDo;
