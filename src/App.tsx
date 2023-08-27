import './App.css';
import styled from 'styled-components';
import Header from "./layout/header/Header";
import Main from "./layout/sections/main/Main";
import Skills from "./layout/sections/skills/skills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;