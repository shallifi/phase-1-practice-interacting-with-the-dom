//timer #counter should increment each second
const bigCounter = document.querySelector("#counter");
console.log(let 'numCounter' = parseInt(bigCounter.innerText);

//counter interval
// A Counter that increases by 1 each second
// let timer = setInterval(fnLog, 1000,bigCounter);

function timer() {
    parseInt(bigCounter.innerText);
    // setInterval(timer, 1000, bigCounter.innerText)

  console.log("Function fnLog executed");
}
timer()

// Plus and Minus buttons that increment or decrement the counter
// buttons should change the counter innerText by one

const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const heartBtn = document.querySelector("#heart");
const pauseBtn = document.querySelector("#pause");

minusBtn.addEventListener("click",() => {
    bigCounter--;
    console.log(minusBtn);
})





// A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer




// A comment box that adds comments when submitted


// setInterval(function(){
//     var a=document.getElementById("counter"),
// b=parseInt(a.innerText);a.innerText=b+1},1e3)},interval=timer()