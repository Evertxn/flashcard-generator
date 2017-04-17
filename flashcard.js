//setting variables and loading in my package/json file
var inquirer = require("inquirer");
var fs = require('fs');
var cardInfo = require('./basic.json');
//logging out the json code
console.log(cardInfo);
//created the constructor to handle the flash cards, front and back
function FlashCard (frontSide,backSide){
    this.front = frontSide;
    this.back = backSide;
}
//creating a new card to be filled out by the user with an inquirer prompt
function createNewCard() {
    inquirer.prompt([{
        type: "input",
        name: "frontSide",
        message: "What's your question?"
    }, {
        type: "input",
        name: "backSide",
        message: "What's your answer?"
        //finishing the prompt with the promise
    }]).then(function (inputs) {
        //this will push the data from my FlashCard contructor into a new flash card with the infro recieved from the inquirer prompt
        var card = new FlashCard(inputs.frontSide, inputs.backSide);
        cardInfo.push(card);
        console.log(card);
        //had to google and use past class examples to get this part to execute, but I'm not entirely sure whats going on.. (TA help)?
        //Is it just writing to the node filesystem from my json file? causing it to show up in the console?
        var newCardInfo = JSON.stringify(cardInfo,null,'\t');
        fs.writeFile('./basic.json',newCardInfo,function(err){
            if(err) throw err;
            console.log("Done");
        })
    })
}
createNewCard();