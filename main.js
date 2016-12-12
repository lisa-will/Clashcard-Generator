//Basic.js accepts front & back arguments.
//Cloze.js accepts text & cloze arguments.

//ClozeFlashcard should have a method that returns 
//only the cloze-deleted portion of the text.

//Create text file to save responses. 

//================================================

var inquire = ("inquire");
var fs = require ('fs');

var BasicFlashcard = require("./basic.js");
var ClozeFlashcard = require("./cloze.js");

//Array for flashcards 
var Basic = [];
var Cloze = [];

//Array for responses 
var responses = [];

inquire.prompt([
    {
        name: "question",
        message: "The Question is: ",
        type: "input"
    }, {
        name: "answer",
        message: "The Answer is: ",
        type: "input"
    }, {
        name: "clozeQuestion",
        message: "The Question is: ",
        type: "input"
    }, {
        name: "clozeText",
        message: "Cloze",
        type: "input"
    }
]).then(handleUserResponse);


function handleUserResponse(response){
        var newResponse = new Basic(response.question, response.answer);
        newResponse.showQuestion();
        response.push(newResponse);

        newClozeResponse = new CLoze(response.text, response.clozeAnswer);
        newClozeResponse.showQuestion();
        response.push(newClozeResponse);

//Log responses to txt file 
fs.appendFile("flashcards.txt", response.question + " " + response.answer + "/n");        
fs.appendFile("flashcards.txt", response.text + " " + response.clozeAnswers + "/n");
};
