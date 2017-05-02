import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Gallery.reducer';
import classnames from 'classnames'

const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];

let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Gallery extends React.Component {

    next() {
        store.dispatch({
            type: 'next'
        })
    }

    previous() {
        store.dispatch({
            type: 'previous'
        })
    }

    thumbnail(idx) {
        store.dispatch({
            type: 'thumbnail',
            index: idx
        })
    }


  render() {
    let currentImage = this.props.images[store.getState().currentIndex];
    return (
      <div>
        <button onClick={() => this.previous()}>
          Previous
        </button>
        <button onClick={() => this.next()}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
        <div>
          {this.props.images.map((imageUrl, idx) =>
            <img onClick={() => this.thumbnail(idx)} key={idx} src={imageUrl} height="60"/>
          )}
        </div>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Gallery images={IMAGES}/>,
    document.getElementById('root')
  );
}
display();
store.subscribe(display);
store.dispatch({
    type: 'get_images',
    images: IMAGES
})
