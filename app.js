// game values

let min=1 , 
    max=10,
    winningNum=getWinningNum( min , max),
    guessesLeft=3;

// UI Elements

const game = document.querySelector('#game'),
      minNum= document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn'),
      guessInput=document.querySelector('#guess-input')
      message=document.querySelector('.message')

// assign UI min and max
minNum.textContent=min
maxNum.textContent=max

game.addEventListener('mousedown', function(e)
{


    if(e.target.className === 'play-again')
    {
        window.location.reload()
    }
})



guessBtn.addEventListener('click' , function(e)
{
    let guess = parseInt(guessInput.value)


    // validate input
    if(isNaN(guess) || guess <min || guess>max)
    {
        setMessage(`Please enter a number between ${min} and ${max}`,'red')
    }


    // check if its winning number
    if(guess === winningNum)
    {
        gameOver(true ,`${winningNum} is correct. YOU WIN` )
    }
    else
    {
        // wrong num 
        guessesLeft-=1
        if(guessesLeft !== 0)
        {
            guessInput.value=''
            guessInput.style.borderColor = 'red'
            setMessage(`${guess} is wrong. ${guessesLeft} guesses left`,'red')
        }
        else
        {
           gameOver(false,`${guessInput.value} is wrong. You Lost. The correct  number was ${winningNum}`)   
               
        }
    }
})

// set message 
function setMessage(msg,color)
{
    message.style.color = color
    message.textContent = msg
}

function gameOver(won , msg)
{
    let color
    won===true ? color='green' : color='red'
    guessInput.disabled = true
    guessInput.style.borderColor = color
    setMessage(msg,color)

    guessBtn.value='Play Again'
    guessBtn.className += 'play-again'
}
function getWinningNum(min , max)
{
    let a = Math.floor(Math.random()*(max-min+1)+min)
    return(a)
    
}