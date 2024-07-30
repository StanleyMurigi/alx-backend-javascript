// 100-weak.js

// Create and export a WeakMap instance
export const weakMap = new WeakMap();

// Export a function to track API queries
export const queryAPI = (endpoint) => {
  if (!(endpoint instanceof Object)) {
    throw new Error('Invalid endpoint');
  }

  // Get the current count from the WeakMap, default to 0 if not set
  const count = weakMap.get(endpoint) || 0;

  // Increment the count
  weakMap.set(endpoint, count + 1);

  // Check if the count exceeds or equals 5
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
};