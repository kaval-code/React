import React from 'react';

const d = new Date();
const hour = d.getHours();
var x;
const cssStyle = {};

if (hour > 0 && hour <= 11) {
    x = "Good Morning";
    cssStyle.color = 'green';
} else if (hour > 11 && hour <= 19) {
    x = "Good Afternoon";
    cssStyle.color = 'orange';
} else {
    x = "Good Night";
    cssStyle.color = 'black';
}

const Heading = () => {
    return <h1>Hello, <span style={cssStyle}>{x}</span></h1>
}

export default Heading;