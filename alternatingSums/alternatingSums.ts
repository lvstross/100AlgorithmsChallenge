export function alternatingSums(a: number[]): number[] {
    let teamOneTotal = 0;
    let teamTwoTotal = 0;
    a.forEach((value, i) => {
        if (i % 2 === 0) {
            teamOneTotal += value;
        } else {
            teamTwoTotal += value;
        }
    });
    return [teamOneTotal, teamTwoTotal];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))