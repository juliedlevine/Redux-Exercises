import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Dragon.reducer';

// Enable Redux chrome extension
let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class DragonGame extends React.Component {

    fight() {
        let fight = Math.random();
        if (fight >= 0.5) {
            store.dispatch({ type: 'damage_dragon' })
        } else {
            store.dispatch({ type: 'damage_hero' })
        }
    }

    flight() {
        store.dispatch({ type: 'flight' })
    }

    play_again() {
        store.dispatch({ type: 'play_again' })
    }

    render() {
        return (
            <div>
                <img src="http://img10.deviantart.net/e984/i/2015/287/c/5/red_dragon_by_sandara-d6hpycs.jpg" width="300" alt="dragon"/><br/>

                {/* Dragon Health */}
                <label>Dragon: {store.getState().dragon_health}</label>&nbsp;

                {/* Hero Health */}
                <label>Hero: {store.getState().hero_health}</label>

                {/* Message text */}
                <br/>{store.getState().message}<br/>

                {/* Fight Button */}
                <button disabled={store.getState().game_over} onClick={() => this.fight()}>Fight</button>

                {/* Flight Button */}
                <button disabled={store.getState().game_over} onClick={() => this.flight()}>Flight</button>

                {/* Play Again Button */}
                {store.getState().game_over ? <button onClick={() => this.play_again()}>Play Again</button> : <br/>}
            </div>
        );
  }
}

function display() {
    ReactDOM.render(
        <DragonGame/>,
        document.getElementById('root')
    );
}

display();
store.subscribe(display);
