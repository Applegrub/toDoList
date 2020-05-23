import React from 'react';
import styled from "@emotion/styled";
import AddToDo from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";

const Root = styled.div`
background: #282731;
width:100vw;
height: 100vh;
`
const Wrapper = styled.div`
width: 920px; 
margin: 0 auto;
background: #4F4E56;
`


const App: React.FunctionComponent = () =>
    <Root>
        <Wrapper>
            <AddToDo/>
            <ToDoList/>
        </Wrapper>
    </Root>

export default App;
