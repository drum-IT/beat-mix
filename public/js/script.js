// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

//When a pad is clicked, find it's matching array, and flip it using a function.
const toggleDrum = (drumArray, index) => {
  if (index > 15 || index < 0) {
    return;
  }
  if (drumArray === 'kicks') {
    flipDrum(kicks, index);
  } else if (drumArray === 'snares') {
    flipDrum(snares, index);
  } else if (drumArray === 'hiHats') {
    flipDrum(hiHats, index);
  } else if (drumArray === 'rideCymbals') {
    flipDrum(rideCymbals, index);
  }
}

//Function used for flipping individual pads.
const flipDrum = (array, index) => {
  if (array[index] === false) {
    array[index] = true;
  } else {
    array[index] = false;
  }
}

//When Clear is clicked, get the correct drum array, and set all values to false.
const clear = drumArray => {
  if (drumArray === 'kicks') {
    kicks.fill(false);
  } else if (drumArray === 'snares') {
    snares.fill(false);
  } else if (drumArray === 'hiHats') {
    hiHats.fill(false);
  } else if (drumArray === 'rideCymbals') {
    rideCymbals.fill(false);
  }
}

//When invert is clicked, get the correct drum array, and invert all values using a function.
const invert = drumArray => {
  if (drumArray === 'kicks') {
    invertPads(kicks);
  } else if (drumArray === 'snares') {
    invertPads(snares);
  } else if (drumArray === 'hiHats') {
    invertPads(hiHats);
  } else if (drumArray === 'rideCymbals') {
    invertPads(rideCymbals);
  }
}

//Iterate through drum array and invert all values.
const invertPads = drumArray => {
  for (let pad = 0; pad < drumArray.length; pad++) {
    if (drumArray[pad] === false) {
      drumArray[pad] = true;
    } else {
      drumArray[pad] = false;
    }
  }
  console.log(drumArray);
}

//play multiple syntn tones at the same time
const getNeighborPads = (x, y, size) => {
  if (x < 0 || y < 0 || x >= size || y >= size) {
    return [];
  } else if (x > 0 && x < 4 && y > 0 && y < 4) {
    return [[x - 1, y], [x, y + 1], [x + 1, y], [x, y - 1]];
  } else if (x === 0 && y === 0) {
    return [[x, y + 1], [x + 1, y]];
  } else if (x === 0 && y === 4) {
    return [[x, y - 1], [x + 1, y]];
  } else if (x === 4 && y === 4) {
    return [[x, y - 1], [x - 1, y]];
  } else if (x === 4 && y === 0) {
    return [[x, y + 1], [x - 1, y]];
  } else if (x === 0) {
    return [[x + 1, y], [x, y + 1], [x, y - 1]];
  } else if (x === 4) {
    return [[x - 1, y], [x, y + 1], [x, y - 1]];
  } else if (y === 0) {
    return [[x - 1, y], [x + 1, y], [x, y + 1]];
  } else if (y === 4) {
    return [[x - 1, y], [x + 1, y], [x, y - 1]];
  }
  return [];
}