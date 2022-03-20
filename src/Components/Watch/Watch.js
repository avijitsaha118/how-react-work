import React, { useEffect, useState } from 'react';
import Display from '../Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);


    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }


    useEffect(() => {
        console.log(steps);
    }, [steps])

    return (
        <div style={{ border: '3px solid red', margin: '5px' }}>
            <h1>my smart watch</h1>
            <h3>my current steps: {steps}</h3>
            <button onClick={increaseSteps}>Run Fast</button>
            <Display name="rado" steps={steps}></Display>
        </div>
    );
};

export default Watch;