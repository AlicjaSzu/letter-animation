export const reset = e => {
  const len = e.target.value.length;
  e.target.setSelectionRange(len, len);
};
