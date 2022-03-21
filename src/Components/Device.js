import React from 'react';
import DeviceDetail from './DeviceDetail/DeviceDetail';
import Tablet from './Tablet/Tablet';

const Device = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <DeviceDetail price={props.price}></DeviceDetail>
            <Tablet></Tablet>
        </div>
    );
};

export default Device;