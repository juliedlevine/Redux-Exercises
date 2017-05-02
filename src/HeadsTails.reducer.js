// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.
function reducer(state = 'images/quarter-front.png', action) {
    if (action.type === 'heads') {
        return state = 'images/quarter-front.png';
    } else if (action.type === 'tails') {
        return state = 'images/quarter-back.png';
    } else {
        return state;
    }
}

export default reducer;
