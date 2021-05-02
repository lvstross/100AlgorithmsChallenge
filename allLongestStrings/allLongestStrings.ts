export function allLongestStrings(inputArray: string[]): string[] {
    let maxStringLength = 0;
    const newInputArray = [];
    inputArray.forEach(value => {
        if (value.length > maxStringLength) {
            maxStringLength = value.length;
        }
    });
    inputArray.forEach(value => {
        if (value.length === maxStringLength) {
            newInputArray.push(value);
        }
    });
    return newInputArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));