export const calculate = (expression) => {
  try {
    const result = eval(expression);

    if (!isFinite(result)) {
      return 'Error';
    }
    return result;
  } catch (error) {
    return 'Error';
  }
};