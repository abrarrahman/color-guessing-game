var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    setupModeButtons();
    setupSquares();
    resetButton.addEventListener("click",function(){
        reset();
    })
    reset();
}
function setupSquares(){
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor)
            {
                changeColors();
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again"
            }
            else
            {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            } 
        })
    }
}
function setupModeButtons(){
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}
function reset(){
    //assign new colors
    colors = generateRandomColors(numSquares);
    //pick new color
    pickedColor = pickColor();
    //update colorDisplay
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue"
    //change square colors
    for(var i=0; i<squares.length; i++)
    {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]; 
        }
        else{
            squares[i].style.display = "none";
        }
    }

}
function changeColors(){
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = pickedColor;
    }
}
function pickColor(){
    var numColors = colors.length;
    var randomIndex = Math.floor(Math.random() * numColors);
    return colors[randomIndex];
}
function generateRandomColors(num)
{
    var randomColors = [];
    for(var i=0; i<num; i++)
    {
        randomColors.push(getRandomColor());
    }
    return randomColors;
}
function getRandomColor(){
    var r,g,b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}