//write a random password generater function
//add any character, int, symbol
//1. arrays to get the randoms
//2. know what typeof the input is and tell the function to 
//add that typeof x3(or whatever client asks for) each put 
//them all into an array

//loop through the array randomly to spit out the password
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
const caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
const low =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
const symbl = ['`','~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','{','[',];

//Push each to an array collecting them randomly?
const getNumOfCharsTogether = [];

//click the generate password get prompts and 
var generateBtn = document.getElementById("generate");
var wrapp = document.getElementById("stopWrap");
var clickForMod = document.getElementById("click-for-modal");
var mainModal = document.getElementById("main-modal");

//run loop the number of times
function loopForCharacters(num, typechar) {  

  // console.log("out terloopfor char"+ num+ typechar)
  //get amount of each and put them into an array
  for(var i = 0; i <= num-1; i++){
    // console.log("inner loop", i)
    //run function the looped amount of times and push each into
    //the array for new Password
    //run helper function with that number

    function howMany(typeofchar) {
      //do random character from typeofchar
      console.log("howmany type of char", typeofchar);
      getNumOfCharsTogether.push(caps[Math.floor(Math.random()*8)]);
      console.log(getNumOfCharsTogether, "chars together array");
    };
      howMany(typechar);
   };

 }

//generatePassword function prompts
function generatePassword() {
  //go to other html file to make use of the modal

  //prompt for letters, nums and symbols
  // const capitals = alert("would you like capital letters in your password?", );
//put the value into motion
const value = document.getElementById("capitals")
  if (value) {
    console.log("if valueß")
      var expression = capitals;
    }

  // const lowercases = prompt("would you like lowercse letters in your password?");
  // const numbes = prompt("would you like numbers in your password?");
  // const symbols = prompt("would you like symbols letters in your password?");

  //if prompt is true push to the array as an object key=type and 
  //value=number of times it should show up in the password

  //switch statement "if any of the prompts are true do this"
  switch (expression) {
    case capitals:
      const typeOfCharacter = 'caps';
      var numberOfThisOne = prompt("how many would you like?");
      // console.log(numberOfThisOne, "num this?")
      loopForCharacters(numberOfThisOne, typeOfCharacter);
      // getNumOfCharsTogether.push({typeOfCharacter: numberOfThisOne});
      break;

      default:
        //run this if nothing else
  };

  // console.log("return this: ", retStr);
  return getNumOfCharsTogether.join('');

};

// Write password to the #password input
const writePassword =  (e) => {
  e.preventDefault();
  // var password = 
  wrapp.style.display = "block";
  mainModal.style.display = "none";
  document.getElementById("password").value = generatePassword(); 
  // console.log('write pw value? & queryselector', passwordText, password);
  // passwordText.value = password;
};

document.getElementById("click-for-modal").addEventListener("click", (e) => {
  e.preventDefault();
  wrapp.style.display = "none";
  mainModal.style.display = "block";
});

// Add event listener to generate button
generateBtn.addEventListener("click",  writePassword);
