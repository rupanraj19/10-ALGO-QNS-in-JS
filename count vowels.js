//  Directions 
//  Write a function that will returns the number of vowels used in a string.
//  vowels [a,e,i,o,u]
// Examples: 
// vowels("car") -> 1
// vowels("elephant") -> 3

function vowels(str) {
    const matches = str.match(/[aeiou]/gi) //regular expression , match is a built in function
    return matches? matches.length : 0 // if matches return matches.length otherwise return 0
}

function vowels(str)
{
    const vowelcheck = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let char of str.toLowerCase()) 
    {
        if (vowelcheck.includes(char))
        {
            count ++
        }
    }
    return count
}
console.log(vowels("elephant"))