// INSTRUCTIONS:    // Write a function so that it returns false if there is an over lap in those start and end times
// SOURCE:  https://github.com/pjung101/algopracticewithphong

arr = [[1, 2], [6, 8], [14, 16], [4, 7]]  // 4 7 and 6 8 overlap
function detectOverlap(arr) {
    // access each element
    // store it object 
    // object key will be trivial, object values will store element[0,1]
    // we will access 2d array again, checking against object
    // check will be if element[0] is between then return true

    let dict = {};
    
    for(let i = 0; i < arr.length; i++) {
        dict[i] = [arr[i][0],arr[i][1]]
    }

    for(let j = 0; j < arr.length; j++) {
        for(let item in dict) {
            if(arr[j][0] < dict[item][1] && arr[j][0] > dict[item][0]) {
                return true;
            }
        }
        
    }
    
    return false;
}
detectOverlap(arr);
