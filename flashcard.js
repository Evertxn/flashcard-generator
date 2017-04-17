var inquirer = require("inquirer");
var fs = require('fs');
var cardInfo = require('./basic.json');
console.log(cardInfo);

function FlashCard (frontSide,backSide){
    this.front = frontSide;
    this.back = backSide;
}

function createNewCard() {
    inquirer.prompt([{
        type: "input",
        name: "frontSide",
        message: "What's your question?"
    }, {
        type: "input",
        name: "backSide",
        message: "What's your answer?"
    }]).then(function (inputs) {
        var card = new FlashCard(inputs.frontSide, inputs.backSide);
        cardInfo.push(card);
        console.log(card);

        var newCardInfo = JSON.stringify(cardInfo,null,'\t');
        fs.writeFile('./basic.json',newCardInfo,function(err){
            if(err) throw err;
            console.log("Done");
        })
    })
}
createNewCard();