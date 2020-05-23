import React, {useState} from "react"
import styled from "@emotion/styled";

const Wrapper = styled.div`
background: #212029;
padding: 30px 40px;
color: white;
justify-content: center;
text-align: center;
input{
width: 600px;
height: 30px;
border-radius: 100px;}
button{
height 40px;
background: #3B3A43;
border-radius: 100px;
}
`
function AddToDo() {
    return(
        <Wrapper>
            <h1>Список дел</h1>
            <input type="text" placeholder="Введите новое дело..." id="toDoEl"/>
            <button type="submit">Добавить</button>
        </Wrapper>
    )
}
export default AddToDo;