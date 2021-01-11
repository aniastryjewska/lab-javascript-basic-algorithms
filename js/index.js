// Iteration 1: Names and Input

let hacker1 = "Mark";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Elvia";
console.log(`The navigator's name is ${hacker2}`);




// Iteration 2: Conditionals


if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if(hacker1.length === hacker2.length) {
    console.log(`Wow! You both have equally long names, ${hacker2.length} characters.`)
  }
  




// Iteration 3: Loops


for(let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase() +  " ");
  }
  
for(let i = 4; i >= 0; i--) {
    console.log(hacker2[i]);
  }
  
if(hacker1 < hacker2) {
    console.log('The driver\'s name goes first.');
  } else if(hacker1 > hacker2) {
    console.log('Yo, the navigator goes first definitely.'); }
  else {
    console.log('What?! You both have the same name?!');
  }
  