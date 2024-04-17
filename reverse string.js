// --- Directions
// Given an integer, retunr an integer that is the reverse
// --- Examples
// reverse("messi") == "issem"
// ordering of numbers.
// --- Examples
// reverseInt(15) == 51
// reverseInt(-15) == -51

//---------- reverse string ---------
// function reverse(str){
//     let reversed = ''

//     // for(let i = 0; i <str.length; i++) {
//     //     reversed = str[i] + reversed // m+'' => em ....
//     // }

//     for (let char of str){
//         reversed = char + reversed
//     }

//     return reversed
// }


// reverse string with array

function reverse(str) {

    const strToArray = str.split('')

    strToArray.reverse()

    return strToArray.join('')

}

console.log(reverse('messi'));

// reverse integer 
function reverseInt(n) {

   const reversed = n.toString().split('').reverse().join('') // reverse method only works on array

   return parseInt(reversed) * Math.sign(n) // convert string to int

}

console.log(reverseInt(-15));