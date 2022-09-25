var isValid = function(s) {
    const hashTable = {"(": ")", "{": "}", "[": "]"};
    const stack = [];
    
    for (const char of s) {
        if (hashTable[char]) {
            stack.push(hashTable[char]);
        } else if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            return false;
        }
    }
    
    return stack.length === 0;
};