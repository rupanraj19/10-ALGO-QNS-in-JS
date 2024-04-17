// Directions
// check to see if two provided strings are anagrams of each other
// one string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces 
// or punctuation. Consider capital letters to be the same as lower case 
// -- Example:
// anagrams( 'loop' , 'pool') --> true
// anagrams( 'hi there' , 'bye there') --> false
function charMap(str){
    const charMap = {}
    str = str.toLowerCase().replace(/[\W]/g,'') //\W is character that are not words
    for (let char of str)
    {
        charMap[char] = ++charMap[char] || 1
    }
    return charMap
}

function anagrams(stringA, stringB)
{
    // step 1 : Build charmap for stringA
    const charmapA = charMap(stringA)  
    // step 2 : Build charMap for stringB
    const charmapB = charMap(stringB)  
    // step 3 : Compare charmapA and charmapB
    if(Object.keys(charmapA).length !== Object.keys(charmapB).length) return false

    for(let key in charmapA)
    {
        if(charmapA[key]!== charmapB[key])
        {
            return false;
        }
    }
    return true
}

console.log(anagrams('LOOP', 'pool'))


/*
Another method is to sort the strings , change to lowercase , remove the whitespace and compare them 

function cleanstr(str){
    return str.toLowerCase().replace(/[\W]/g,'').split('').sort().join('')
}

*/