const helloWorld = (opt) => {
  if (opt) {
    return opt;
  } else {
    return 'hello world';
  }
};

module.exports = helloWorld;