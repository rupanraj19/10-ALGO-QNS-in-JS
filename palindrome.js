// check the given string whether is same when it is spell backwords
// Examples 
// palindrome("LOL") == true
// palindrome("Barca") == false

function palindrome(str)
{
    const reversed = str.split('').reverse().join('')

    if (str == reversed)
    {
        return true
    }else 
    {
        return false
    }
    //return str === reversed 
}

console.log(palindrome('LOL'));
console.log(palindrome('Barca'));