console.log('rewinding data...')

rewindKey1 = 'recommended-history'
history_data = JSON.parse(localStorage.getItem(rewindKey1))

currentStateKey = 'recommended-history-state'

//Get the current state
currentState = localStorage.getItem(currentStateKey)

//Update Current State by 1
currentState++

//Check if state is greater than the length of data
//Reupdate the local storage
//console.log(history_data)
localStorage.setItem(currentStateKey, currentState)

currentElements = history_data[currentState]
console.log(currentElements[0].videoTitle)

//Access Parent Element 
primaryElement = document.querySelector('#primary')
//Get Child Element - But Still Parent
secondaryElement = primaryElement.firstElementChild
//Get Main Element
mainElement = secondaryElement.children[5]
//Delete the Main Element
mainElement.remove()

//Make the new contents element
mainContentElement = document.createElement("div")

//Add Back HTML In Replacement 
siblingElement = secondaryElement.children[4]
siblingElement.parentNode.insertBefore(mainContentElement, siblingElement.nextSibling)


// //Inject CSS Class
// rows = document.querySelectorAll('ytd-rich-grid-row')
// videosRow0 = rows[0].querySelectorAll('ytd-rich-grid-media')

// console.log(counter)

// //Programatically Inject CSS To Head
// if (currentState > 1) {
//   videosRow0.forEach(element => {
//     element.style.animation = 'none';
//     element.offsetHeight; /* trigger reflow */
//     element.style.animation = null; 
//   })
// } else {
//   videosRow0.forEach(element => {
//     element.classList.add('injected-box')
//   })
// }

// Modify Web Requests for popup
// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//     return {cancel: details.url.indexOf("://www.youtube.com/api") != -1};
//   },
//   {urls: ["<all_urls>"]},
//   ["blocking"]
// );
