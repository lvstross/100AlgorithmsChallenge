export function adjacentElementsProduct(inputArray: number[]): number {
    let maxProduct = 0;
    inputArray.forEach((value, i, arr) => {
        const adjacentValue = arr[i + 1];
        if (adjacentValue) {
            const adjacentProduct = value * arr[i + 1];
            if (adjacentProduct > maxProduct) {
                maxProduct = adjacentProduct;
            }
        }
    });
    return maxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));