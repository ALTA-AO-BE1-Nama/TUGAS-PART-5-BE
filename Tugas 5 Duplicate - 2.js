// nama : Fino

function removeDuplicates(nums) {  
    let nextUniqueNumberIndex = 1; 
    let pointer = 1;

    while (pointer < nums.length) {
        
        if (nums[pointer] !== nums[pointer - 1]) {
            nums[nextUniqueNumberIndex] = nums[pointer];
            nextUniqueNumberIndex += 1;
        }
        pointer += 1;
    }

    nums.length = nextUniqueNumberIndex;

    return nums.length;
}
// input :
let arr = [2, 3, 3, 3, 6, 9, 9];
console.log(removeDuplicates(arr));  // Output: 4
console.log(arr);  // Output: [ 2, 3, 6, 9 ]