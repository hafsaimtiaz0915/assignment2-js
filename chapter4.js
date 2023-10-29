console.log("Chapter 4");
console.log("Practice Exercise 4.1");
let coding = true;
console.log(coding);
if (coding) {
    console.log("I know how to code!!");
} else {
    console.log("I dont know how to code!!");
}
if (!coding) {
    console.log("I dont know how to code!!");
} else {
    console.log("I know how to code!!");
}
coding = false;
console.log("After changing value of varaible");
if (coding) {
    console.log("I know how to code!!");
} else {
    console.log("I dont know how to code!!");
}
if (!coding) {
    console.log("I dont know how to code!!");
} else {
    console.log("I know how to code!!");
}
console.log("Practice Exercise 4.2");
var age = prompt("Please enter your age:");
age = parseInt(age);
var message;
if (age >= 21) {
    message = "You are allowed entry to the venue and can purchase alcohol.";
}
else if (age >= 19) {
    message = "You are allowed entry to the venue, but you cannot purchase alcohol.";
}
else {
    message = "Sorry, you are denied entry to the venue.";
}
console.log(message);
console.log("Practice Exercise 4.3");
var isValidID = false;
var message2;
message2 = isValidID ? "You are allowed into the venue." : "You are not allowed into the venue due to an invalid ID.";
console.log(message2);
console.log("Practice Exercise 4.4");
var randomNumber = Math.floor(Math.random() * 6);
var userQuestion = prompt("Ask the Magic 8-Ball a yes-or-no question:");
var response;
switch (randomNumber) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "It is decidedly so.";
        break;
    case 2:
        response = "Reply hazy, try again.";
        break;
    case 3:
        response = "Cannot predict now.";
        break;
    case 4:
        response = "Don't count on it.";
        break;
    case 5:
        response = "My sources say no.";
        break;
    default:
        response = "Invalid response.";
}
var final_response = "You asked: " + userQuestion + "\nMagic 8-Ball says: " + response;
console.log(final_response);
console.log("Practice Exercise 4.5");
var prize = prompt("Select a number between 0 and 10 to determine your prize:");
prize = parseInt(prize);
var output_message = "My Selection: ";
var prizeMessage;
switch (prize) {
    case 0:
        prizeMessage = "Congratulations! You've won a car.";
        break;
    case 1:
        prizeMessage = "You've won a vacation package.";
        break;
    case 2:
        prizeMessage = "You've won a new smartphone.";
        break;
    case 3:
        prizeMessage = "You've won a gift card to your favorite store.";
        break;
    case 4:
        prizeMessage = "You've won a year's supply of chocolate.";
        break;
    case 5:
        prizeMessage = "You've won a pet kitten.";
        break;
    case 6:
        prizeMessage = "You've won a 50-inch LED TV.";
        break;
    case 7:
        prizeMessage = "You've won a gaming console.";
        break;
    case 8:
        prizeMessage = "You've won a spa weekend for two.";
        break;
    case 9:
        prizeMessage = "You've won a $500 shopping spree.";
        break;
    case 10:
        prizeMessage = "You've won a luxury cruise vacation.";
        break;
    default:
        prizeMessage = "Invalid selection. Please choose a number between 0 and 10.";
}
console.log(output_message + prizeMessage);
console.log("Chapter Project");
console.log("Evaluating a number game");
var dynamic_number = 45;
var user_number = prompt("Enter a number : ");
user_number = parseInt(user_number);
if (user_number > dynamic_number) {
    console.log("Your number is greater than dynamic number", dynamic_number);
} else if (user_number < dynamic_number) {
    console.log("Your number is less than dynamic number", dynamic_number);
} else {
    console.log("Your number is equal to dynamic number", dynamic_number);
}
console.log("Friend checker game");
const known_Names = ["iqra", "sheeza", "zainab"];
const user_Name = prompt("Please enter your name:");
switch (user_Name) {
    case "iqra":
    case "sheeza":
    case "zainab":
        console.log("You are a friend!");
        break;
    default:
        console.log("I don't know you.");
}
console.log("Rock Paper Scissor game");
const choices = ["Rock", "Paper", "Scissors"];
const player_Selection = Math.floor(Math.random() * 3);
const computer_Selection = Math.floor(Math.random() * 3);
let result_Message;
if (player_Selection === computer_Selection) {
    result_Message = "It's a tie!";
} else {
    if (
        (player_Selection === 0 && computer_Selection === 2) ||
        (player_Selection === 1 && computer_Selection === 0) ||
        (player_Selection === 2 && computer_Selection === 1)
    ) {
        result_Message = "You win!";
    } else {
        result_Message = "Computer wins!";
    }
}
console.log("Player choose : ", choices[player_Selection]);
console.log("Computer choose : ", choices[computer_Selection]);
console.log(result_Message);



