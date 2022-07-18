import React from "react";
import Card from "./Card";
import Data from "./Data";

const App = () => {
    return (
        <>
            <Card
                name={Data[0].name}
                imgsrc={Data[0].imgsrc}
                info={Data[0].info}
            />

            <Card
                name={Data[1].name}
                imgsrc={Data[1].imgsrc}
                info={Data[1].info}
            />

            <Card
                name={Data[2].name}
                imgsrc={Data[2].imgsrc}
                info={Data[2].info}
            />
        </>
    );
}

export default App;