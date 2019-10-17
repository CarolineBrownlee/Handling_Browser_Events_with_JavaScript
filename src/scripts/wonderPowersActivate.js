//  ***** BEGINNING OF WONDER POWERS ACTIVATE! PRACTICE EXERCISE ***** //

// The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.
let flightSection = document.getElementById("flight")
let mindreadingSection = document.getElementById("mindreading")
let xraySection = document.getElementById("xray")



// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
const flightHandlerFunction = ((newClass) => {
    flightSection.classList.toggle("disabled")        
    flightSection.classList.toggle(newClass)        
    console.log("flight.classList", flightSection.classList)
})

const mindreadingHandlerFunction = ((newClass) => {
    mindreadingSection.classList.toggle("disabled")        
    mindreadingSection.classList.toggle(newClass)        
    console.log("mindreading.classList", mindreadingSection.classList)
})

const xrayHandlerFunction = ((newClass) => {
    xraySection.classList.toggle("disabled")        
    xraySection.classList.toggle(newClass)        
    console.log("xray.classList", xraySection.classList)
})

// Add the correct string as the first argument to addEventListener()

document.querySelector("#activate-flight").addEventListener("click", function() {
    flightHandlerFunction("enabled")
})

// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

document.querySelector("#activate-mindreading").addEventListener("click", function() {
    mindreadingHandlerFunction("enabled")
})

document.querySelector("#activate-xray").addEventListener("click", function() {
    xrayHandlerFunction("enabled")
})

// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.

const allSections = document.querySelectorAll("section")
console.log(allSections)

const enableAllFunction = ((newClass) => {
    allSections.forEach(section => {
        section.classList.toggle("disabled")
        section.classList.toggle(newClass)
        console.log("section.classList", allSections.classList)
    });
    
})


document.querySelector("#enable-all").addEventListener("click", function() {
    enableAllFunction("enabled")
})
