const output = (id, type) => document.querySelector(id).innerHTML= type;

const rockPaperScissors = () => {
    let hand1 = document.querySelector('#hand1-input').value;
    console.log(hand1)
    let hand2 =  (['rock', 'paper', 'scissors'])[Math.floor(Math.random()*3)]
    console.log(hand2)

    hand1 = hand1.trim();
    hand2 = hand2.trim();
    hand1 = hand1.toLowerCase();
    hand2 = hand2.toLowerCase();

    if (hand1 === 'rock') {
        output('#hand1-move', '🤘')
    } else if 
        (hand1 === 'paper') {
        output('#hand1-move', '💵')
    } else if
        (hand1 === 'scissors') {
        output('#hand1-move', '🔪')
    }
    
    if (hand2 === 'rock') {
        output('#hand2-move', '🤘')
    } else if 
        (hand2 === 'paper') {
        output('#hand2-move', '💵')
    } else if
        (hand2 === 'scissors') {
        output('#hand2-move', '🔪')
    }
    
    if (hand1 === hand2) {
        output('#hand1', '🤜');
        output('#hand2', '🤛')
        output('#winner', 'tie!');
    } else if 
        ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'paper')) {
        output('#hand1', '🙌');
        output('#hand2', '🖕')
        output('#winner', 'You win!')

    } else if ((hand2 === 'rock' && hand1 === 'scissors') || (hand2 === 'paper' && hand1 === 'rock') || (hand2 === 'scissors' && hand1 === 'paper')) {
        output('#hand2', '🙌');
        output('#hand1', '🖕');
        output('#winner', 'Computer wins!')
    } else {
      alert('Please enter "rock", "paper", or "scissors"')
    }

    if (document.querySelector('#winner').innerText === 'You win!') {
        document.querySelector('#winner').style.color = "#2ECC40";
    } else {
        document.querySelector('#winner').style.color = "tomato";
    }
            
}
        
        

