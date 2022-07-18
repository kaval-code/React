import React from "react";
import Card from "./Card";

const App = () => {
    return (
        <>
            <Card name="Cat" imgsrc="./img/cat.jpg" />
            <Card name="Dog" imgsrc="./img/dog.jpg" />
            <Card name="Tiger" imgsrc="./img/tiger.jpg" />
        </>
    );
}

export default App;