import {
  longestSubstringUsingMap,
  longestSubstringUsingNestedLoops,
  longestSubstringUsingSet,
} from "./longestUniqueSubstring.js";

type TestCaseType = {
  desc: string;
  input: string;
};

const testCases: TestCaseType[] = [
  {
    desc: "Empty string",
    input: "",
  },
  {
    desc: "All unique characters",
    input: "abcde",
  },
  {
    desc: "All duplicate characters",
    input: "aaaaaaa",
  },
  {
    desc: "Mix of duplicate and unique characters",
    input: "abcabcbb",
  },
  {
    desc: "Another mix of duplicate and unique characters",
    input: "abcaabcdba",
  },
];

(() => {
  console.log("------------------------------------------------------");

  for (const { desc, input } of testCases) {
    console.log(
      `Description: ${desc} 
        \nInput: ${input} 
        \nNested Loop method: ${JSON.stringify(
          longestSubstringUsingNestedLoops(input)
        )}
        \nTwo pointers + Map method: ${JSON.stringify(
          longestSubstringUsingSet(input)
        )}
        \nTwo pointers + Set method: ${JSON.stringify(
          longestSubstringUsingMap(input)
        )}
        \n------------------------------------------------------`
    );
  }
})();
