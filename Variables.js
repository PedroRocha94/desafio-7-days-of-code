//Challenge of using variables, with user interaction to display personalized message.

let userName = null;
let userAge = 0;
let programmingLanguage = null;

userName = prompt("What your name?");
userAge = prompt("How old are you?");
programmingLanguage = prompt("What programming language are you studying?");

let messageWelcome = `Hello ${userName}, you are ${userAge} and you are already learning ${programmingLanguage}!`;

alert(messageWelcome);

let learningLanguage = prompt(`Do you like to study ${programmingLanguage}? 
  Answer with the number 1 for YES or 2 for NO.`);

switch (learningLanguage) {
  case '1':
    alert("Very good! Keep studying and you will be very successful.");
    break;
  case '2':
    alert("Ahh what a pity... Have you tried to learn other languages?");
    break;
  default:
    alert("This answer is not valid!")
    break;
}