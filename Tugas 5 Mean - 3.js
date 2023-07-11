// nama : Fino

function hitungMeanDanMedian(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    
    // Hitung mean
    let mean = Math.round(total / arr.length);

    let median;
    if (arr.length % 2 === 0) {
        median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } 
    // Jika array ganjil
    else {
        median = arr[Math.floor(arr.length / 2)];
    }
    
    return {mean: mean, median: median};
}

let arr = [1, 2, 3, 4];
console.log(hitungMeanDanMedian(arr)); // Output: { mean: 2.5, median: 2.5 }