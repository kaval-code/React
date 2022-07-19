import React from "react";
import Card from "./Card";
import Data from "./Data";

const App = () => {
    return (
        <>
            {Data.map((val, i) => {
                return (
                    <Card
                        key={i}
                        name={val.name}
                        imgsrc={val.imgsrc}
                        info={val.info}
                        link={val.link}
                    />
                );
            })}
        </>
    );
}

export default App;