import React from 'react';
import Dial from './Dial/Dial';

const Display = (props) => {
    return (
        <div style={{ border: '3px solid green', margin: '5px' }}>
            <h2>Name:{props.name}</h2>
            <p>Steps today:{props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div >
    );
};

export default Display;