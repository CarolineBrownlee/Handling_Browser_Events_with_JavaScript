// ***** BEGINNING OF SCROLLING AND SCALING PRACTICE EXERCISE ***** //

// The learning objective for this exercise is to practice listening for the scroll event broadcast by the browser, and updating DOM elements in response.

const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
 
document.addEventListener("scroll", function () {

    let y = window.scrollY
  
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

   audrey.style.width = `${y / 3}px`
//    audrey.style.width = y / 3 + "px"
//    console.log(window.scrollY)
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

   audrey.style.height = `${y / 4}px`
//    audrey.style.height = y / 4 + "px" 
})


//   string concatination 





