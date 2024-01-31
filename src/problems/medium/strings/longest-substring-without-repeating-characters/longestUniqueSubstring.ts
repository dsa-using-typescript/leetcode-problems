type FunctionType = {
  maxLen: number;
  ansStr: string;
};

// Using two loops + set
export function longestSubstringUsingNestedLoops(s: string): FunctionType {
  const len = s.length;
  let maxLen = 0;
  let ansStr = "";

  // Traverse the string
  for (let i = 0; i < len; i++) {
    const characterSet = new Set<string>();

    for (let j = i; j < len; j++) {
      let currentCharacter = s[j] as string;

      // If set has duplicates
      if (characterSet.has(currentCharacter)) {
        break;
      }

      // Add current character to the set
      characterSet.add(currentCharacter);

      if (j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        ansStr = s.slice(i, j + 1);
      }
    }
  }

  return { maxLen, ansStr };
}

// Using two pointers + set
export function longestSubstringUsingSet(s: string): FunctionType {
  const characterSet = new Set<string>();
  let maxLen = 0;
  let start = 0;
  let ansStr = "";

  // Traverse the string
  for (let end = 0; end < s.length; end++) {
    let currentCharacter = s[end] as string;

    const characterIsPresent = () => characterSet.has(currentCharacter);

    // If duplicate is found, remove the characters from the start until
    // all duplicates of the current character are removed from the set
    if (characterIsPresent()) {
      while (start < end && characterIsPresent()) {
        characterSet.delete(s[start] as string);
        start++;
      }
    }

    characterSet.add(currentCharacter);

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      ansStr = s.slice(start, end + 1);
    }
  }

  return { maxLen, ansStr };
}

// Using two pointers + map
export function longestSubstringUsingMap(s: string): FunctionType {
  const latestIndexMap = new Map<string, number>();
  let start = 0;
  let end = 0;
  let maxLen = 0;
  let ansStr = "";

  while (end < s.length) {
    let currentCharacter = s[end] as string;

    // If current character already exists in the map
    if (latestIndexMap.has(currentCharacter)) {
      // Store thr maximum between (duplicate characters' index) + 1
      // and current index of start
      start = Math.max(
        (latestIndexMap.get(currentCharacter) as number) + 1,
        start
      );
    }

    latestIndexMap.set(currentCharacter, end);

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      ansStr = s.slice(start, end + 1);
    }

    end++;
  }

  return { maxLen, ansStr };
}
