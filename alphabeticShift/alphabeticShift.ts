export function alphabeticShift(inputString: string): string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return inputString
        .split('')
        .map(value => {
            const alphaIndex = alphabet.indexOf(value);
            if (alphaIndex === alphabet.length - 1) {
                return alphabet[0];
            }
            return alphabet[alphaIndex + 1];
        })
        .join('');
}

console.log(alphabeticShift('crazy'));