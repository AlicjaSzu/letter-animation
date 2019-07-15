export var reset = function reset(e) {
  var len = e.target.value.length;
  e.target.setSelectionRange(len, len);
};