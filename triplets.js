arr = [-1, 0, 1, 2, -1, 4]


function findTriplets(arr) {
    let found = false;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    document.write(arr[i]);
                    document.write(" ");
                    document.write(arr[j]);
                    document.write(" ");
                    document.write(arr[k]);
                    found = true;

                }
            }
        }
        if (found === false) {
            document.write(" not exist ");
        }
    }
}
findTriplets(arr);