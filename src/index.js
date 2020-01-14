import React from 'react';
import { render } from 'react-dom';
import './css/style.css';

const Greeting = () => {
    return (
        <div>
            <h1>Hello from React</h1>
            <div id="image"></div>
        </div>
    )
}

render(
    <Greeting />,
    document.getElementById('target')
)
