export function addBorder(picture: string[]): string[] {
    let maxLengthOfWall = 0;
    picture.forEach((value: string) => {
        if (value.length > maxLengthOfWall) {
            maxLengthOfWall = value.length;
        }
    });
    maxLengthOfWall += 2;
    const wall = Array(maxLengthOfWall).fill('*').join('');
    const newPicture = []
    picture.forEach((value: string) => {
        newPicture.push(`*${value}*`);
    });
    newPicture.unshift(wall);
    newPicture.push(wall);
    return newPicture;
}

console.log(addBorder(["abc", "ded"]));