$(document).ready(function () {
    var questionBank = {
        question1: {
            q: "You turn on the TV, what channel do you put on?",
            a: "Animal Planet",
            b: "Discovery Channel",
            c: "Interdimensional Cable",
            d: "HGTV",
            nextQuestion: function() {
                loadQuestion(questionBank.question2);
            }   
        },
        question2: {
            q: "What is your go to first date spot?",
            a: "Something adventerous like a hike, or picnic",
            b: "Museum or concert",
            c: "Dinner and a movie",
            d: "Whatever they want to do",
            nextQuestion: function() {
                loadQuestion(questionBank.question3);
            }    
        },
        question3: {
            q: "You're in a group project, what role do you play?",
            a: "Contribute what you can, getting your part done",
            b: "Group leader, assigning tasks",
            c: "Group projects are dumb, you do your own thing",
            d: "Do all the work yourself, its done faster and better this way",
            nextQuestion: function() {
                loadQuestion(questionBank.question4);
            }    
        },
        question4: {
            q: "When are you most on your game?",
            a: "Morning",
            b: "Afternoon",
            c: "Night",
            d: "Existence is pain",
            nextQuestion: function() {
                loadQuestion(questionBank.question5);
            }    
        },
        question5: {
            q: "What of these words have you been called most?",
            a: "Dad",
            b: "Pathetic",
            c: "Asshole",
            d: "Smart",
            nextQuestion: function() {
                loadQuestion(questionBank.question6);
            }    
        },
        question6: {
            q: "How do you feel about love?",
            a: "Necessary Evil",
            b: "Everyone dies alone, love is pointless",
            c: "It's worth putting in the time and effort",
            d: "As soon as they show me affection I'm in love",
            nextQuestion: function() {
                loadQuestion(questionBank.question7);
            }    
        },
        question7: {
            q: "How do you handle your mistakes?" ,
            a: "Fess up",
            b: "Pretend like nothing happened",
            c: "Plead for forgiveness",
            d: "I don't make mistakes, and would never admit it if I did",
            nextQuestion: function() {
                loadQuestion(questionBank.question8);
            }    
        },
        question8: {
            q: "You've had more than a few at a house party, which one is you?",
            a: "Wrecklessly drunk, making a fool of yourself",
            b: "Trapping people in conversation with long winded stories",
            c: "Dancing like they'res no tomorrow",
            d: "Hanging with the dog in the corner",
            nextQuestion: function() {
                loadQuestion(questionBank.question9);
            }    
        },
        question9: {
            q: "I look into your eyes, what are they telling me?",
            a: "These eyes have seen a lot of things",
            b: "Life is effort and I'll stop when I die",
            c: "I am in great pain. Please help me.",
            d: "Don't look at me",
            nextQuestion: function() {
                loadQuestion(questionBank.question10);
            }    
        },
        question10: {
            q: "Which of these things could you not survive a week without?",
            a: "Alcohol",
            b: "Television",
            c: "Music",
            d: "Food/Water",
            nextQuestion: function () {
                $('#question').html('<div class="jerry">Only a Jerry would take a personality quiz...get it together Jer...get it together...</div><img src="../RickJerryQuiz/assets/images/Jerry_Worm.gif"/>');
                $('#answer-box').html('<div><div class="btn btn-outline-dark restart">Restart?</div></div>');               
                $('.restart').on("click", function() {
                    reset();
                });            
            },
        },
    };
    function loadQuestion(question) {
        var questionNumber = question;
        var currentQuestion = questionNumber.q;
        $('.first-gif').empty();
        $('.question-block').html('<div class="sub-box"><div class="text-center" id="question">' +
            currentQuestion + '</div><div class="col-md-12 mx-auto text-center" id="answer-box"><button class="col-md-8 btn mx-auto multiple-choice" id="a">' +
            questionNumber.a +
            '</button><button class="col-md-8 btn mx-auto multiple-choice" id="b">' + 
            questionNumber.b + 
            '</button><button class="col-md-8 btn mx-auto multiple-choice" id="c">' +
            questionNumber.c +
            '</button><button class="col-md-8 btn mx-auto multiple-choice" id="d">' +
            questionNumber.d + '</button></div></div>'
        );
        
        $('.multiple-choice').on("click", function () {
            questionNumber.nextQuestion();
        });
    }
    function reset() {
        numberRight = 0;
        numberWrong = 0;
        gameOver = false;
        loadQuestion(questionBank.question1);
    }
    $('.start').on("click", function () {
        loadQuestion(questionBank.question1);
    });

});