// INSTRUCTIONS:    // Write a function so that it returns false if there is an over lap in those start and end times
// SOURCE:  https://github.com/pjung101/algopracticewithphong

// ALGORITHM 1
// arr = [[1, 2], [6, 8], [14, 16], [4, 7]]  // 4 7 and 6 8 overlap
// function detectOverlap(arr) {
//     // access each element
//     // store it object 
//     // object key will be trivial, object values will store element[0,1]
//     // we will access 2d array again, checking against object
//     // check will be if element[0] is between then return true

//     let dict = {};
    
//     for(let i = 0; i < arr.length; i++) {
//         dict[i] = [arr[i][0],arr[i][1]]
//     }

//     for(let j = 0; j < arr.length; j++) {
//         for(let item in dict) {
//             if(arr[j][0] < dict[item][1] && arr[j][0] > dict[item][0]) {
//                 return true;
//             }
//         }
        
//     }
    
//     return false;
// }
// detectOverlap(arr);

// ALGORITHM 2
// Given a SORTED list of intervals, detect if the new given interval fits or not
// constraints: time is O(log n) space is O(1)
function verifyConflict(arr, newTime){
    // newTime needs to fit inbetween the arr time gaps
    // find the range between the ends
    // then check newTime to see if it falls within range

    let newTimeMin = Math.min(...newTime)
    let newTimeMax = Math.max(...newTime)
    let currMin;
    let currMax;

    for(let i= 0; i < arr.length; i++) {
        currMin = Math.min(...arr[i]);
        currMax = Math.max(...arr[i])
        if(newTimeMin >= currMin && newTimeMin <= currMax) {
            return false;
        }
    }
    return true;
}
// console.log(verifyConflict([[1,2],[3,4],[8,9]], [5,6])) // return true
// console.log(verifyConflict([[1,2],[3,7],[8,9]], [5,6])) // return false
console.log(verifyConflict([[1,2],[3,7],[8,9]], [10,11])) // return true

