import React from 'react';

import './App.css';
import StyledComponents from './components/StyledComponents';
import Emotion from './components/Emotion';

function App() {
    return (
        <div className="App">
            <h1>Compare CSS-IN-JS</h1>
            <p>styled-components</p>
            <StyledComponents />
            <p>Emotion</p>
            <Emotion />
        </div>
    );
}

export default App;
