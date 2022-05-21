/**
 * Sub module 1 internal print function.
 * This function simulate that internal used business logic by module
 * functions that only used internally
 *
 * @param {String} message - message to print
 */
const internalPrint = (message) => {
  console.log(message);
};

/**
 * Print function `submodule 1 function 1`
 */
const printFunction1 = () => {
  const text = 'submodule 1 function 1';
  internalPrint(text);
  return text;
};

/**
 * Print function `submodule 1 function 2`
 */
const printFunction2 = () => {
  const text = 'submodule 1 function 2';
  internalPrint(text);
  return text;
};

/**
 * Exporting like this can control what you want to export
 *
 * or you can do export directly on the functions expression
 * @example
 * export const function1 = () => {}
 */
export {
  printFunction1,
  printFunction2,
};
