export const convertStringToList = text => {
  if (typeof text === "string") {
    const length = text.length;
    let i = -1;
    let wrapper = [];

    while (++i < length) {
      if ((text[i] === " " && text[i - 1] !== " ") || i === 0) {
        wrapper.push([]);
      }
      wrapper[wrapper.length - 1].push({ letter: text[i], index: i });
    }
    return wrapper;
  }
  return text;
};
