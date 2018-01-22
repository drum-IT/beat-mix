// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, arrayIndex, newPresetArray) => {
  if (requestType === 'GET') {
    if (presets[arrayIndex] === undefined) {
      return [404];
    } else {
      return [200, presets[arrayIndex]];
    }
  } else if (requestType === 'PUT') {
    if (presets[arrayIndex] === undefined) {
      return [404];
    } else {
      presets[arrayIndex] = newPresetArray;
      return [200, presets[arrayIndex]];
    }
  } else {
    return [400];
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;