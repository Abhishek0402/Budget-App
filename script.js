/* (function() {
    
    //function constructor
    function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

    //display function

Question.prototype.displayQuestion = function() {  
    //display the questions
    console.log(this.question);
     //display the multipe answer option
    for(var i = 1; i <= this.answers.length; i++){
        console.log(i + ':' + this.answers[i]);

}
 } 

//check for correct answer

Question.prototype.checkAnswer = 
    function(ans) {
    if(ans === this.correct) {
        console.log('Correct answr!'); 
    } else {
        console.log('Wrong answer!'); 
    }
}

var q1 = new Question('Is js the collest programing language?',['yes','no'],0);

var q2 = new Question('what is the name of this course\'s teacher?',['john','michal','jonas'],2);

var q3 = new Question('What does best describe coding?',['boring','hard','fun','tedious'],2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer =  parseInt(prompt('Please select the correct answer')); 

questions[n].checkAnswer(answer);
})();
*/

(function() {
    
    //function constructor
    function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

    //display function

Question.prototype.displayQuestion = function() {  
    //display the questions
    console.log(this.question);
     //display the multipe answer option
    for(var i = 1; i <= this.answers.length; i++){
        console.log(i + ':' + this.answers[i]);

}
 } 

//check for correct answer

Question.prototype.checkAnswer = 
    function(ans) {
    if(ans === this.correct) {
        console.log('Correct answr!'); 
    } else {
        console.log('Wrong answer!'); 
    }
}

var q1 = new Question('Is js the collest programing language?',['yes','no'],0);

var q2 = new Question('what is the name of this course\'s teacher?',['john','michal','jonas'],2);

var q3 = new Question('What does best describe coding?',['boring','hard','fun','tedious'],2);

    
    
         var questions = [q1, q2, q3];
    
    function nextQuestion() {
   

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = prompt('Please select the correct answer'); 

questions[n].checkAnswer(answer);
        
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer));
            
            
                nextQuestion();
        }
    
    } 
    
    nextQuestion();
var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer =  parseInt(prompt('Please select the correct answer')); 

questions[n].checkAnswer(answer);
})();

