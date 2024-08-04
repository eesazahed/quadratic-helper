const gcd = (a: number, b: number) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export default gcd;
