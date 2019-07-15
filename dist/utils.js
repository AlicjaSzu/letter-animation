export var convertStringToList = function convertStringToList(text) {
  if (typeof text === "string") {
    var length = text.length;
    var i = -1;
    var wrapper = [];

    while (++i < length) {
      if (text[i] === " " && text[i - 1] !== " " || i === 0) {
        wrapper.push([]);
      }

      wrapper[wrapper.length - 1].push({
        letter: text[i],
        index: i
      });
    }

    return wrapper;
  }

  return text;
};