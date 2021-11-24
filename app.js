// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var fortunes = [
    // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
    "Give one compliment a day!",
    "Read a book a month.",
    "Turn off your phone one night a week.",
    "Write down one thing you’re grateful for every night.",
    "Make New Friends!",
    "Declutter Your Space."
  ];
  
  function tellFortune() {
    
    // generate a random number between 0 and the number of the array items
    var randomNumber = Math.floor(Math.random() * fortunes.length);
  
    // print the random number to the console log to make sure it's working
    console.log("random number: " + randomNumber);
  
    // take the fortune at the random spot in the array and insert it into the "fortune" div
   document.getElementById("fortune").innerHTML = fortunes[randomNumber];
  }
  
  function reset() {
    // what goes here? (hint: make the fortune div contain an empty string)
    
  }

