let rannum = Math.floor(Math.random() *100) + 1;


let isrunning = true;
let attempts = 0;
let ramain = 10;


//select the input
var input = document.getElementById("inputbox");

//select the submit button
let mysubmit = document.getElementById("mysubmit");

//select the restart button 
let restart = document.getElementById("restart").onclick = function() {
    setTimeout("location.reload(true);",10);
}

//select the attempt's
let ramaining = document.getElementById("attempt");

//select the result 
let result = document.getElementById("message");


mysubmit.onclick = function() {
    
        console.log("HI");
        if(input.value == 0) {
            window.alert("Enter your guessing  number");
        }
        
        else if(input.value < 0 || input.value > 100) {
            window.alert("Enter the  number in 1 to 100");
        }
        
        else{
            ramain--;
            if(ramain == 0) {
                load(20);
            }
            ramaining.textContent = ramain;
            attempts++;
            if(input.value > rannum) {
                result.textContent = "Too high! Try again";
    
            }
            else if(input.value < rannum) {
                result.textContent = "Too low! Try again";
            }
            else {
                result.textContent = `Correct!  The answer was ${rannum}.  It took you ${attempts} attempts`;
                isrunning = false;
            }
        }
    }

// reload function 
function load(time) {
    
    //reload the page is depend on the time 
    setTimeout("location.reload(true);",time)

}



