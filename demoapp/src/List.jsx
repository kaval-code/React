import React from "react";

const List = () => {
    return (
        <ol>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
        </ol>
    );
}

const list2 = "List 2";
const list3 = "List 3";

const list4 = () => {
    return "List 4";
}

export default List;
export { list2, list3, list4 };