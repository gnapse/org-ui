// See https://github.com/facebook/jest/issues/4545#issuecomment-332762365
// and https://stackoverflow.com/a/45689029/621809
global.requestAnimationFrame = function(cb) {
  return setTimeout(cb, 0);
};
