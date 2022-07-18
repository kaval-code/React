import React from "react";
import Heading from './Heading';
import Paragraph from './Paragraph';
import List, * as listElements from './List';

const App = () => {
  return (
    <>
      <div className='box'>
        <div id='head' className='child'>
          <Heading />
        </div>
        <div id='para' className='child'>
          <Paragraph />
        </div>
        <div id='list' className='child'>
          <List />
        </div>
        <div id="list2">
          <ul>
            <li>{listElements.list2}</li>
            <li>{listElements.list3}</li>
            <li>{listElements.list4()}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

