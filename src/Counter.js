import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';
let store = Redux.createStore(reducer);

class Counter extends React.Component {
    addOne() {
        store.dispatch({
            type: 'add'
        })
    }
    subtractOne() {
        store.dispatch({
            type: 'subtract'
        })
    }
    render() {
    return (
      <div>
        <button onClick={() => this.subtractOne()}>-</button>
        {store.getState()}
        <button onClick={() => this.addOne()}>+</button>
      </div>
    );
    }
}

function display() {
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
