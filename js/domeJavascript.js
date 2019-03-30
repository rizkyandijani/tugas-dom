var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score');
var scoreBoard_div = document.querySelector('.score-board');
var result_p = document.querySelector('.result > p');
var rock_div = document.getElementById('r');
var paper_div = document.getElementById('p');
var scissors_div = document.getElementById('s');
// var reset = document.getElementById('reset')

function getComputerChoice(){
    var choices = ['r','p','s'];
    var randomNumber = Math.floor(Math.random()*3); 
    return choices[randomNumber];
}
// console.log(getComputerChoice())

function convertToWord(letter){
    if( letter === 'r'){
        return 'Rock'
    }
    if( letter === 'p'){
        return 'Paper'
    }
    else{
        return 'Scissors'
    }
}
var flag = false
function win(userChoice,computerChoice){
    userScore++;
    if( userScore === 3){
        userScore_span.innerHTML = userScore;
        flag = true
        result_p.innerHTML = 'Game End! You Win!!'
        document.getElementById('return').style.display = 'inherit'
        return window.location.reload
    }
    userScore_span.innerHTML = userScore;
    var userSmallFont = 'user'.fontsize(2).sup();
    var compSmallFont = 'comp'.fontsize(2).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmallFont} beats ${convertToWord(computerChoice)}${compSmallFont}. you win!`
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 400)
    // computerScore_span.innerHTML = computerScore;
    // result_p.innerHTML = userChoice + ' beats ' + computerChoice + '. You win!'
    
}
function lose(userChoice,computerChoice){
    computerScore++;
    if( computerScore === 3){
        computerScore_span.innerHTML = computerScore;
        flag = true
        result_p.innerHTML = 'Game End! You Lost!!'
        document.getElementById('return').style.display = 'inherit'
        return window.location.reload
    }
    computerScore_span.innerHTML = computerScore;
    var userSmallFont = 'user'.fontsize(2).sup();
    var compSmallFont = 'comp'.fontsize(2).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmallFont} loses to ${convertToWord(computerChoice)}${compSmallFont}. you loose.....`
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 400)
    // computerScore++;
    // console.log('lost')
    // console.log('ini score comp ',computerScore)
    
}
function draw(userChoice,computerChoice){
    // userScore++;
    // userScore_span.innerHTML = userScore;
    var userSmallFont = 'user'.fontsize(2).sup();
    var compSmallFont = 'comp'.fontsize(2).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmallFont} same with ${convertToWord(computerChoice)}${compSmallFont}. it's a Draw!!`
    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 400)
    // userScore++;
    // computerScore++;
    // console.log('draw')
    // console.log(userScore,computerScore)
}


// function reset(x){
//     var x = false
//     if( x === true){
//     userScore = 0
//     computerScore = 0
//     result_p.innerHTML = 'lets play'
//     }
// }


function game(userChoice){
    var computerChoice = getComputerChoice();
    // console.log('user choice ==> ' + userChoice);
    // console.log('computer Choice ==> ' + computerChoice);
    switch ( userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice,computerChoice);
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice,computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice,computerChoice);
            break;
    }
}
function main(){
    if(flag === false){
        rock_div.addEventListener('click',function(){   
            game('r')
        })
        paper_div.addEventListener('click',function(){
            game('p')
        })
        scissors_div.addEventListener('click',function(){
            game('s')
        })
    }
}
main()