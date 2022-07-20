import "./styles.css";
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Content>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Content>
    </div>
  );
}


const Content = styled.div`
  position : absolute;
  background-color : red;
  h1{
    color: white;
  } 
`
