// 7-has_array_values.js

const hasValuesFromArray = (set, arr) => {
    return arr.every(value => set.has(value));
  };
  
  export default hasValuesFromArray;  