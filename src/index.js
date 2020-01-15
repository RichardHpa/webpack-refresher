import React from 'react';
import { render } from 'react-dom';
import './css/style.css';

const Greeting = () => {
    return (
        <div>
            <h2>Hello from React</h2>
            <div id="image"></div>
        </div>
    )
}

render(
    <Greeting />,
    document.getElementById('target')
)
