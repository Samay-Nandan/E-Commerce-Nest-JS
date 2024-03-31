export const convertToNumberIfNumeric = (inputString: string) =>
  /^-?\d+(\.\d+)?$/.test(inputString) ? Number(inputString) : inputString;

export const convertNumericStringsInObject = (object: Object) =>
  Object.entries(object).reduce(
    (accumulator, [key, value]) => ({
      ...accumulator,
      [key]: convertToNumberIfNumeric(value),
    }),
    {}
  );
