/* 
    We use document.querySelector() functions to select all the html elements individually.. 
    and document.querySelectorAll() for all the elements matching that type.
    We can use let but we use const because these variables are not changeable.
*/

const timerLeft = document.querySelector(".timer-left");
const timerEnds = document.querySelector(".timer-ends");
const buttons = document.querySelectorAll('[data-time]');
const stopButton = document.getElementById("stopTimer");

let countdown; // We set a variable countdown outside the function scope, we give it let because it changes overtime
buttons.forEach(button => button.addEventListener("click", startTimer)); // On all of the buttons we add an event listener click which begins startTimer() function

function timer(seconds){
    if(confirm("Are you sure?")){
        clearInterval(countdown); // Clears the previous timer
        // Note: We need two, with one at the start, because we might pick a new timer before the last one ends!
        let now = Date.now(); // Get current time from the current date
        const then = now + seconds * 1000; // Future time
        displayTimeLeft(seconds); // Display how much time is left at the very start
        // Note: MUST display first because setInterval will only show the time after the first second passes!
        displayEndingTime(then); // Display when the time will end (static / does not change)

        countdown = setInterval(() => { // Then we countdown each second in an interval
            let secondsLeft = Math.round((then - Date.now()) / 1000);
            // Subtract the future time with the current time and divide with 1000 because it is calculated in milliseconds
            // Then round the number since the division floats the number to a point

            if(secondsLeft < 0){ // When the timer ends..
                clearUp();
                return; // ..and exit! :)
            }

            displayTimeLeft(secondsLeft); // We display how much time is left..
        }, 1000); // ..which changes every second! (1000ms / 1s)
    }
}

const displayTimeLeft = (seconds) => { // We create the function for displaying the time left, which has a seconds argument
    let hour = ""; // We add the variable for the hour, if it exists
    let minutes = Math.floor(seconds / 60); // Converting to minutes by dividing with seconds and using floor to get the value closer to the lesser side of the number (Ex: 1.6 floored is 1)
    const secondsRemain = seconds % 60; // And we also add up the remaining seconds by using a moduo operandum (Ex: 10)
    if(minutes > 59){ // When the minutes are bigger than 59
        hour = Math.floor(minutes / 60); // Calculate the hour by dividing with 60 and returning a floor value
        minutes = minutes - hour * 60; // Then, while hour is still a number, you subtract the minutes with the hour value * 60 to get the minute range from 00 - 59
    }
    if(hour){ // If the hour is not empty
        hour = hour < 10 ? "0" + hour : hour; // Add a 0 in front if smaller than 0, otherwise leave it as it is!
    }
    
    const currentTime = `${hour}${hour ? ":" : ""}${minutes < 10 ? "0" : "" }${minutes}:${secondsRemain < 10 ? "0" : "" }${secondsRemain}`;
    // Then calculate the current time, adding an extra 0 if either minute or second is smaller than 10
    // And check if hour is set to anything.. If it is, add a ":" at the beginning along with the hour; if not then leave it as an empty string.
    document.title = currentTime; // We set the timer to show in the tab of the browser..
    timerLeft.textContent = currentTime; // ..and we set the element's text content to the currentTime!
}

const displayEndingTime = (timestamp) => { // We create the function for the time when our timer will end using a timestamp in timer() function
    const end = new Date(timestamp); // We calculate the end with the timestamp and new Date()
    const hour = end.getHours(); // Then we get the hours..
    const minutes = end.getMinutes(); // And the minutes..
    const seconds = end.getSeconds();
    const adjustedHour = hour > 12 ? hour - 12 : hour; // Adjust the hour accordingly..
    timerEnds.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}!`; // ..and set it all up to write on the screen!
}

function startTimer(){ // We create the function startTimer() here
    // NOTE: At first, I created the startTimer() using the ES6 syntax version but I got an error saying it was undefined.
    // Apparently, the keyword "this" does not work in an arrow function! Therefore, it can't access the dataset with time's value!
    // So we HAVE to use the regular function syntax in order to do this! The more you know.
    let seconds = parseInt(this.dataset.time); // We gather the amount of seconds from the dataset and..
    timer(seconds); // ..start the timer() function + add the required number of seconds!
    stopButton.style.display = "block";
}

const stopTimer = () => {
    if(confirm("Are you sure you want to stop now?")){
        clearUp();
    }
}

const clearUp = () => {
    alert("BREAK OVER!");
    clearInterval(countdown);
    timerLeft.textContent = "";
    timerEnds.textContent = "";
    stopButton.style.display = "none";
}

function customTime(e){
    e.preventDefault();
    let hours = parseInt(document.getElementsByName("hours")[0].value);
    let minutes = parseInt(document.getElementsByName("minutes")[0].value);
    let seconds = parseInt(document.getElementsByName("seconds")[0].value);
    if(hours === 0 && minutes === 0 && seconds === 0){
        alert("Must pick at least one value.");
    }
    else{
        timer(hours * 3600 + minutes * 60 + seconds);   
        stopButton.style.display = "block";
    }
}