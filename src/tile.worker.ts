/* eslint-disable no-restricted-globals */

// postMessage("hello from worker!");
// export default {} as any;

export default () => {
  postMessage("hello from worker!");
};

console.log("test");
