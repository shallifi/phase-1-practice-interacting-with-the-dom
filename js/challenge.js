//timer #counter should increment each second
let bigCounter = document.querySelector("#counter");

//counter interval
let intervalID = setInterval(function () {
    return bigCounter.innerText++;
}, 1000);

function startTimer() {
  intervalID = setInterval(function () {
    return bigCounter.innerText++;
}, 1000);
}

// Plus and Minus buttons that increment or decrement the counter
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const heartBtn = document.querySelector("#heart");
const pauseBtn = document.querySelector("#pause");

minusBtn.addEventListener("click",() => {
      return bigCounter.innerText--;
})

plusBtn.addEventListener("click", () => {
    return bigCounter.innerText++;
})
//changing the button text 
const btn = document.getElementById('btn');

//timer pause function needs to  VALUE clearinterval, resume VALUE 
function stopTimer() {
  return clearInterval(intervalID);  
}

function resumeButton() {
  if (pauseBtn.innerText = "resume") {    
      resume (bigCounter.innerText, 1000);
  }
  resumeButton()
}
// //////// Toggle button text on click
///this one works for eventListener
////

const toggleText = ("click", function() {
  if(pauseBtn.innerText === "pause") {
    pauseBtn.innerText = "resume";
    stopTimer()
  }
  else{
    pauseBtn.innerText = "pause";
    startTimer()
  }
}); 

pauseBtn.addEventListener("click", toggleText)
// stopTimer)

// console.log(pauseBtn.innerText)
//   intervalID(function () {
//       return bigCounter.innerText++;
//   }, 1000);
//   below only adds one number when it is pressed
//   return bigCounter.innerText++,1000;





// A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer




// A comment box that adds comments when submitted



// pauseBtn.addEventListener('click', stopTimer) 

// function  handleClick(e) {
  
  //   if (pauseBtn.textContent = "pause" {
    //     return pauseBtn.textContent = 'resume'
    //     }
    
    //   } else (pauseBtn.textContent = 'resume') {
      //     return pauseBtn.textContent = 'pause'
      //   };
      // };
      // console.log(pauseBtn.innerText);
      ////////////////
      // function togglePause() {
        
      //   if (pauseBtn.innerText =="pause") {
      //     result ="resume";
      //     stopTimer()
      //     togglePause("resume")
      //   }else {(pauseBtn.innerText =="resume")
      //    result ="pause"; 
      //       setInterval()
      //       togglePause("pause")
      //     }
      //     return result;
      //   }
      //   console.log(pauseBtn.innerText)
      //   togglePause()