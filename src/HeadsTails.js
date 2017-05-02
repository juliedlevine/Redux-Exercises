import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './HeadsTails.reducer';
let store = Redux.createStore(reducer);

class HeadsTails extends React.Component {
  flip() {
      var num = Math.random();
      if (num >= 0.5) {
          store.dispatch({
              type: 'tails'
          })
      } else {
          store.dispatch({
              type: 'heads'
          })
      }
  }
  render() {
    return (
      <div>
        <img src={store.getState()}/>
        <button onClick={() => this.flip()}>
          Flip!
        </button>
      </div>
    );
  }
}

// Wrap this in a display function, and subscribe to store's state
// changes and re-display
function display() {
  ReactDOM.render(
    <HeadsTails/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
