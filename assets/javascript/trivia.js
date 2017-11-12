var answers = {
    'answer0': 'a',
    'answer1': 'b',
    'answer2': 'c',
    'answer3': 'd',
    'answer4': 'a',
    'answer5': 'b',
    'answer6': 'c',
    'answer7': 'd',
    'answer8': 'a',
    'answer9': 'b'
};
var timeLeft = 180;
var quizOver = false;
function scoreQuiz(event) {
    if(quizOver){
        return;
    }
    clearInterval(gameClock);
    var score = 0;
    var formElements = document.forms[0].elements;
    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].checked) {
            if (formElements[i].value === answers[formElements[i].name]) {
                score++;
            }
        }
    }
    quizOver=true;
}
function updateClock() {
    $('#gameClock').text(timeConverter(timeLeft));
    timeLeft--;
}
function timeConverter (time){
    var minutes = 0;
    var seconds = 0;
    while(time){
        if(time>=60){
            time-=60;
            minutes++;
        }
        else{
            seconds=time;
            time=0;
        }
    }
    return minutes + ':' + (seconds>9 ? seconds : '0' + seconds);
}
var gameTimer = setTimeout(scoreQuiz, 1000*60*3);
var gameClock = setInterval(updateClock, 1000);
$('#submit').on('click', function (event) {
    event.preventDefault();
    clearTimeout(gameTimer);
    scoreQuiz(event);
})
