// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let max = -999999999;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            let sum = 0;
            sum += arr[i][j] + arr[i][j+1] + arr[i][j+2] 
                             + arr[i+1][j+1]
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if (sum > max) max = sum;
        }
    }
    return max
}

let test = [[1,2,3,4,5,6],
            [7,8,9,1,2,3],
            [4,5,6,7,8,9],
            [1,2,3,4,5,6],
            [7,8,9,1,2,3],
            [4,5,6,7,8,9]]

console.log(hourglassSum(test));
