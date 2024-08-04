const copy = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert(`Copied "${text}" to clipboard!`))
    .catch(() => true);
};

export default copy;
