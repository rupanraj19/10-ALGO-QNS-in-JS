// Given a string, return the character that has the most appearance 
// Examples 
// maxChar("abccccdd") == "c"
// maxChar("2222343111") == "2"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of str)
    {
        if(charMap[char])
        {
            charMap[char]++;
        }else
        {
            charMap[char] = 1;
        }
    }


    // for (let key in charMap)
    for(const [key,value] of Object.entries(charMap))//to loop the object
    {
        console.log(key,value)    
        if(value > max) //charMap[key]
        {
            max = value; 
            maxChar = key;
        }
    }
    // return charMap;
    return maxChar;

}

console.log(maxChar("abccccdd"));