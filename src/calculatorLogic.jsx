export const calculate = (expression) => {
  try {
    const clearedExpression = expression.replace(/\b0+(\d+)/g, '$1');
    const result = eval(clearedExpression);

    if (!isFinite(result)) {
      return 'Error';
    }
    return result;
  } catch (error) {
    return 'Error';
  }
};