export function twoSumUsingHashMap(nums: number[], target: number): number[] {
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

export function twoSumUsingTwoPointers(
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

