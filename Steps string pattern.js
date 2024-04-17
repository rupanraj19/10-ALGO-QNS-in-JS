// write a function that accepts a positive number N.
// The function should console log a step shape
//  with N levels using the character. Make sure the step has spaces on the right hand side!
//  Examples
//  steps(2)
//  '#'
//  '##'

function steps(n) {
    for(let i=1; i<=n; i++){ // row
    let line = ''
       for(let j=1; j<=n; j++){ // col 
        if(j<=i){
            line += '#'
        }else {
            line += ' '
        }
       }
    console.log(line)
    }
}

steps(3)