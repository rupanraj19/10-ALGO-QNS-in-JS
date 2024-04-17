// Write a function that accepts a string
// capitalise the first letter of each word in string then 
// return the capitalised string
// Examples
// capitalise("this is life") --> "This Is Life"
// capitalise("football, goal , players") --> "Football, Goal, Players"

function capitalise(str)
{   
    const words = str.split(' '); // ['this', 'is', 'life']
    const result = []
    for (let word of words) {
        result.push(word[0].toUpperCase()+ word.slice(1))
    }
    return result.join(' ')

    //alternative 
    //return words.map(word => word[0].toUpperCase()+word.slice(1)).join(' ')
}

console.log(capitalise("this is life"));
console.log(capitalise("football, goal, players and managers"));