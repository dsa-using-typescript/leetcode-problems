function twoSumUsingHashMap(nums: number[], target: number): number[] {
  const len = nums.length;
  const addendMap = new Map<number, number>();

  for (let i = 0; i < len; i++) {
    let addend = nums[i] as number;

    let otherAddend = target - addend;

    if (addendMap.has(otherAddend)) {
      return [addendMap.get(otherAddend) as number, i];
    }

    addendMap.set(addend, i);
  }

  return [-1, -1];
}

function twoSumUsingTwoPointers(
  nums: number[],
  target: number
): number[] | string {
  // 1. Sort in ascending order
  nums.sort((prev, curr) => prev - curr);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = (nums[left] as number) + (nums[right] as number);

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [nums[left] as number, nums[right] as number];
    }
  }

  return "Not found";
}

// Tests
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
      \nInput: ${input} 
      \nTarget: ${target} 
      \nHashMap method: ${twoSumUsingHashMap(input, target)}
      \nTwo pointers method: ${twoSumUsingTwoPointers(input, target)}
      \n------------------------------------------------------`
    );
  }
})();
