const isFactorable = (a: number, b: number, c: number): boolean => {
  const discriminant = b * b - 4 * a * c;
  return discriminant >= 0;
};

export default isFactorable;
