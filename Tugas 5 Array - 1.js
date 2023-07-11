// nama : Fino

function joinArrayRemoveDuplicate(array1, array2) {
    
    let combinedArray = array1.concat(array2);

    
    let uniqueArray = [...new Set(combinedArray)];

    
    return uniqueArray;
}

// Input:
let array1 = ["Budi", "Ani", "Rita"];
let array2 = ["Rita", "Siti", "Ani"];
console.log(joinArrayRemoveDuplicate(array1, array2)); // Output: ["Budi", "Ani", "Rita", "Siti"]