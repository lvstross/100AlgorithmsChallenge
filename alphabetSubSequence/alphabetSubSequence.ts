export function alphabetSubsequence(s: string): boolean {
    let currentCodeMax = 0;
    let codeDecreased = false;
    let isAlphaSubSequence = false;
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (currentCodeMax < code) {
            currentCodeMax = code;
            isAlphaSubSequence = true;
        } else {
            codeDecreased = true;
        }
    }
    if (codeDecreased) {
        isAlphaSubSequence = false;
    }
    return isAlphaSubSequence;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
