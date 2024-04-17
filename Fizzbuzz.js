// Write a program that console logs the number from 1 to n. 
// But for multiples of three print "fizz" instead  of the number and for the multiples of five print "buzz" instead of the number.
// For numbers which are multiples of 3 and 5 print "fizzbuzz"
// Example:
// fizzbuzz(5):
// 1
// 2
// fizz
// 4
// buzz
// fizz

function fizzbuzz(n)
{
 for(let i = 1; i <= n; i++){
     if(i % 3 === 0 && i % 5 === 0){
         console.log('fizzbuzz')
     }else if(i % 3 === 0){
         console.log('fizz')
     }else if(i % 5 === 0){
         console.log('buzz')
     }else{
         console.log(i)
     }
 }
}

fizzbuzz(10)