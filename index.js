const Calculate = {

  factorial(input) {
    if (input === 0) {
      return 1;
    };
    factored = input;
    for(i = 1; i < input; i++) {
      factored *= (input - i);
    };
    return factored;
  }
};

module.exports = Calculate;
