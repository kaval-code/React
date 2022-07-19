import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt=" image" width="500" height="500" />
                    <div className="imgInfo">
                        <h3 className="cardName">{props.name}</h3>
                        <p>{props.info}</p>
                        <button><a className="open" href={props.link} target="_blank">Open</a></button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;