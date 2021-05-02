export function addTwoDigits(n: any): any {
    const digits = String(n)
        .split('')
        .map((value: string) => Number(value))
        .reduce((prev, curr) => curr += prev, 0);
    return digits;
}

console.log(addTwoDigits(29));