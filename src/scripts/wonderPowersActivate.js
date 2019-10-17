//  ***** BEGINNING OF WONDER POWERS ACTIVATE! PRACTICE EXERCISE ***** //

// The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.
let flightSection = document.getElementById("flight")

// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
const flightHandlerFunction = ((newClass) => {
    flightSection.classList.toggle("disabled")        
    flightSection.classList.toggle(newClass)        
    console.log("flight.classList", flightSection.classList)
})

// Add the correct string as the first argument to addEventListener()

document.querySelector("#activate-flight").addEventListener("click", function() {
    flightHandlerFunction("enabled")
})


// let guineaPig = document.getElementById("guinea-pig")

// function toggleClass (newClass) {
//   guineaPig.classList.toggle(newClass)
//   console.log("guineaPig.classList", guineaPig.classList)
// }

// document.getElementById("add-color").addEventListener("click", function() {
//     toggleClass("blue")
// })
