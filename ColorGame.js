var numOfSquares= 6;
var colors= generateRandomColors(numOfSquares);
var squares=document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var h2=document.querySelector("h2");
colorDisplay.textContent=pickedColor;
var message=document.getElementById("message");
var reset= document.getElementById("reset");
var modebtn=document.querySelectorAll(".modebtn")

init();

function init(){
    modebtnSetup();
    squaresSetup();
    resetbtn();    
}

function modebtnSetup(){
    for(var i=0; i<modebtn.length; i++)
    {
        modebtn[i].addEventListener("click", function(){
            modebtn[0].classList.remove("selected");
            modebtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy"? numOfSquares=3 : numOfSquares=6;
            resetbtn();
        });
    }

}

function squaresSetup(){
    for(var i=0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor)
            {
                message.textContent="Correct";
                changeColor(clickedColor);
                h2.style.backgroundColor= clickedColor;
                reset.textContent= "Play again?"; 
            }else{
                message.textContent="Try again";
                this.style.backgroundColor= "black";
            }
        })
    }

}

function resetbtn (){
    colors= generateRandomColors(numOfSquares);
    pickedColor=pickColor();   
    colorDisplay.textContent=pickedColor;
    message.textContent= "";
    reset.textContent="New Color";
    for(var i=0; i<squares.length; i++){
        if(colors[i])
        {   
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";

        }
    }
    h2.style.backgroundColor="steelblue"; 
}

reset.addEventListener("click", function(){
    resetbtn();
})


function changeColor(color){
    for(var i=0; i<squares.length; i++){
       squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr=[];
    for(var i=0; i<num; i++){
        arr.push(randomColors());
    }
    return arr;
}
function randomColors(){
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
     