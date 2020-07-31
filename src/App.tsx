import React from 'react';

import './App.css';
import StyledComponents from './components/StyledComponents';
import Emotion from './components/Emotion';
import JSS from './components/JSS';

function App() {
    return (
        <div className="App">
            <h1>Compare CSS-IN-JS</h1>
            <p>styled-components</p>
            <StyledComponents />
            <p>Emotion</p>
            <Emotion />
            <p>JSS</p>
            <JSS />
        </div>
    );
}

export default App;
