var Basic = function(front,back){
    this.front = front; 
    this.back = back; 
}
Basic.prototype.showQuestion = function(){
    console.log(this.front);
}
Basic.prototype.showAnswer = function(){
    console.log(this.back);
}
//q1
var question1 = new Basic()

question1.front = "How do you say, 'Thank you' in Francis?";
question1.back = "Merci";

question1.showQuestion();
question1.showAnswer();

//q2 
var question2 = new Basic()

question2.front = "How do you say, 'and You?' in Francis?";
question2.back = "et toi?";

question2.showQuestion();
question2.showAnswer();

//q3
var question3 = new Basic()

question3.front = "How do you say, 'Very well, Thank you!' in Francis?";
question3.back = "tres bien, merci";

question3.showQuestion();
question3.showAnswer();

//q4
var question4 = new Basic()

question4.front = "How do you say, 'Good Bye!' in Francis?";
question4.back = "au revoir";

question4.showQuestion();
question4.showAnswer();

//q5
var question5 = new Basic()

question5.front = "How do you say, 'See you soon!' in Francis?";
question5.back = "a bientot";

question5.showQuestion();
question5.showAnswer();


module.exports = Basic; 