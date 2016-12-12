var Cloze = function(text, cloze){
    this.text = text; 
    this.clozeAnswer = cloze;
}

//q1
var question1 = new Cloze()

question1.clozeAnswer = "Bonjour";
question1.text = " Good Morning! ";
this.showQuestion = function(){
    console.log(this.text);
}
this.showAnswer = function(){
    console.log(this.clozeAnswer);
}

//q2
var question2 = new Cloze()

question2.clozeAnswer = "Salut";
question2.text = " Hi!, Hey!, & Bye! ";
this.showQuestion = function(){
    console.log(this.text);
}
this.showAnswer = function(){
    console.log(this.clozeAnswer);
}

//q3
var question3 = new Cloze()

question3.clozeAnswer = "Bonne Nuit";
question3.text = " Good Night! ";
this.showQuestion = function(){
    console.log(this.text);
}
this.showAnswer = function(){
    console.log(this.clozeAnswer);
}

//q4
var question4 = new Cloze()

question4.clozeAnswer = "Merci Beaucoup";
question4.text = " Thank you very much! ";
this.showQuestion = function(){
    console.log(this.text);
}
this.showAnswer = function(){
    console.log(this.clozeAnswer);
}

//q5
var question5 = new Cloze()

question5.clozeAnswer = "Comment allez-vous?";
question5.text = " How are you? ";
this.showQuestion = function(){
    console.log(this.text);
}
this.showAnswer = function(){
    console.log(this.clozeAnswer);
};

module.exports = Cloze; 