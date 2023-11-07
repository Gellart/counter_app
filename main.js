// Select three DOM elements using the ID from the "index.html"
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');
const decrementButton = document.getElementById('decrementBtn');

// The counter variable is initialized with a value of 0. 
// It keeps track of the current counter value.
let counter = 0;

// Increment => when the symbol + is clicked, the arrow function increments the counter by 1
// and updates the innerText 
incrementButton.addEventListener("click", () => {
    counter++;
    counterElement.innerText = counter;
    console.log(counter);
});

// Decrement => when the symbol - is clicked, the arrow function decrements the counter by 1
// and updates the innerText
decrementButton.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        counterElement.innerText = counter;
        console.log(counter);
    };
});


