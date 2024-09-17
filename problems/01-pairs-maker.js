/*
Write a function pairsMaker(arr) that takes in a an array as an argument. The
function should return a 2D array where the subarrays represent unique pairs of
element from the input array.
*/

function pairsMaker(arr){

    let arr2d = [];
    let arr1 = [];
    let arr2 = [];

    //get unique pairs
    for(let i = 0; i < arr.length; i++){
        arr1.push(arr[i]);
      for (let j = i + 1; j < arr.length; j++) {
        arr2.push(arr[j]);
      }
    }

    //fill in 2d array
    for(let i = 0; i < arr1.length; i++){
      //arr2d[i] = [];
        arr2d.push([arr1[i], arr2[i]]);
    }
  
    return arr2d

}

// console.log(pairsMaker(["a", "b", "c", "d"]));
// //=> [ [ 'a', 'b' ],
// //     [ 'a', 'c' ],
// //     [ 'a', 'd' ],
// //     [ 'b', 'c' ],
// //     [ 'b', 'd' ],
// //     [ 'c', 'd' ] ]

// console.log(pairsMaker(["Rosemary", "Alex", "Connor"]));
// //=> [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairsMaker;
