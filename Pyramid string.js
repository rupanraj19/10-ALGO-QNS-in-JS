// write a function that accepts a positive number N.
// The function should console log a pyramid shape
//  with N levels using the # character. Make sure the pyramid has spaces on the both hand sides!
//  Examples
//  steps(2)
//  ' # '
//  '###'

function pyramid(n)
{
    const mid = Math.floor((2*n-1)/2)
    for(let i =0 ; i < n ;i++)
    {
        let line = ''
        for (let j = 0 ; j < 2*n-1 ;j++)
        {
            if(j >= mid - i && j <= mid + i)
            {
                line += '#';
            }else 
            {
                line +=' ';
            }
        }
        console.log(line)
    }
}


pyramid(5)