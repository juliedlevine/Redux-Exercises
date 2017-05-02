import reducer from './Gallery.reducer';

it('should initialize to zero, images is empty array', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual({
      currentIndex: 0,
      images: []
  });
});

it('should go to the next image (incrementing state)', () => {
  expect(reducer({currentIndex: 1, images: [
    'images/comfy.jpg',
    'images/farted.jpg',
    'images/hate.jpg',
    'images/lolcat_airplane.jpg',
    'images/mocked.jpg',
    'images/monorail.jpg'
  ]}, {type: 'next'})).toEqual({
      currentIndex: 2,
      images: [
        'images/comfy.jpg',
        'images/farted.jpg',
        'images/hate.jpg',
        'images/lolcat_airplane.jpg',
        'images/mocked.jpg',
        'images/monorail.jpg'
      ]
  });
});

xit('should wrap around when it gets to the end', () => {
  expect(reducer(6, {type: 'next'})).toEqual(0);
});

xit('go to the previous image (decrementing state)', () => {
  expect(reducer(5, {type: 'previous'})).toEqual(4);
});

// Write additional tests for
// 1. going to next image
// 2. make sure it wraps around if goes over
// 3. going to previous image
// 4. make sure it wraps around if goes under
// 5. jumping to a specific image index
