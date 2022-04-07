let Fizz = [ ];
let Buzz = [ ];
let FizzBuzz = [ ];
let Others  = [ ];

for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // do something
        FizzBuzz.push('FizzBuzz')
     } else if (i % 3 === 0) {
         // do something
         Fizz.push('Fizz')
     } else if ( i % 5 === 0) {
        // do something
        Buzz.push('Buzz')
     } else {
         // do something
         Others.push('Others')
    }
}

console.log("Total Number of Fizz = "      + Fizz.length);
console.log("Total Number of Buzz = "      + Buzz.length);
console.log("Total Number of FizzBuzz = "  + FizzBuzz.length);
console.log("Total Number of Others = "    + Others.length);