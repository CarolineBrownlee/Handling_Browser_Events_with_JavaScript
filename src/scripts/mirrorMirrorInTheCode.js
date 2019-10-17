// ***** BEGINNING OF MIRROR, MIRROR IN THE CODE PRACTICE EXERCISE ***** //

// The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.

const message = document.getElementById("message")
let outputElLeft = document.querySelector(".article_one")
let outputElRight = document.querySelector(".article_two")

message.addEventListener("keyup", event => {
    outputElLeft.textContent = event.target.value
    outputElRight.textContent = event.target.value
})


// document.querySelector("body").addEventListener("click", function(event) {
//     console.log("You clicked on the body of the DOM")
// })