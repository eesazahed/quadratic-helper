import gcd from "./gcd";

const gcfOfThreeNumbers = (a: number, b: number, c: number) => {
  return gcd(gcd(a, b), c);
};

export default gcfOfThreeNumbers;
