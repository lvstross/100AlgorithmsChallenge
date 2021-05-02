export function almostIncreasingSequence(sequence: number[]): boolean {
    let removed = 0;
    let currentSeqMax = 0;
    let isIncreasingSequence = false;
    sequence.forEach((value, i, arr) => {
        if (value > currentSeqMax) {
            currentSeqMax = value;
            isIncreasingSequence = true;
        } else {
            removed++;
        }
    });
    if (removed > 1) {
        isIncreasingSequence = false;
    }
    return isIncreasingSequence;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 