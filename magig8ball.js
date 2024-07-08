let userName = '';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');
//add your name in between the '' on line 1

const userQuestion = '';
console.log();
//add your question in between the '' on line 5

let randomNumber = Math.floor(Math.random() * 8) + 1;
let eightBall = (randomNumber);
//This piece of code will randomly generate a number between 0 & 8

switch(randomNumber) {
    case 1:
        console.log('It is certain');
        break;
    case 2:
        console.log('It is decidedly so');
        break;
    case 3:
        console.log('Reply haze try again');
        break;        
    case 4:
        console.log('cannot predict now');
        break;
    case 5:
        console.log('Do not count on it');
        break;
    case 6:
        console.log('My sources say no');
        break;
    case 7:
        console.log('Ooulook not so good');
        break;        
    case 8:
        console.log('Signs point to yes');
        break;
    default: 
        console.log('Error');
    }
//The switch will display the random number to generate the magic result 
console.log(eightBall);
// will print your magiv awnser to the console