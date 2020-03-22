import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/Hello';
import HelloClass from './components/HelloClass';

let obj = {
  name: '1',
  firstName: 'a',
  lastName: 'b'
}
ReactDOM.render(<HelloClass {...obj}></HelloClass>, document.getElementById('root'));