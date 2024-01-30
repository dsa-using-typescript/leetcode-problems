import { twoSumUsingHashMap, twoSumUsingTwoPointers } from "./twoSum.js";

type TwoSumType = {
  desc: string;
  input: number[];
  target: number;
};

const testCases: TwoSumType[] = [
  {
    desc: "Given array is empty",
    input: [],
    target: 5,
  },
  {
    desc: "Only one element",
    input: [5],
    target: 10,
  },
  {
    desc: "Two numbers are found",
    input: [4, 3, 7, 5],
    target: 8,
  },
  {
    desc: "Two numbers are found",
    input: [-4, 4, -3, 7, 5, 0],
    target: 4,
  },
  {
    desc: "Numbers are not found",
    input: [20, 15, 8, 12],
    target: 9,
  },
];

(function () {
  console.log("------------------------------------------------------");

  for (let { desc, input, target } of testCases) {
    console.log(
      `Description: ${desc} 
        \nInput: [${input}] 
        \nTarget: ${target} 
        \nHashMap method: [${twoSumUsingHashMap(input, target)}]
        \nTwo pointers method: ${twoSumUsingTwoPointers(input, target)}
        \n------------------------------------------------------`
    );
  }
})();
