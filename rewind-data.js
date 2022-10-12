console.log('rewinding data...')

rewindKey1 = 'recommended-history'
history_data = JSON.parse(localStorage.getItem(rewindKey1))

currentStateKey = 'recommended-history-state'

//Get the current state
currentState = localStorage.getItem(currentStateKey)

//Update Current State by 1
currentState++

//Check if state is greated than the length of data
//Reupdate the local storage
//console.log(history_data)
localStorage.setItem(currentStateKey, currentState)

currentElements = history_data[currentState]
console.log(currentElements[0].videoTitle)

//Access Current DOM Elements
currentProfiles = document.querySelectorAll('#avatar img[src]')
thumbnailElement = currentProfiles[0].parentElement.parentElement.parentElement.parentElement

console.log(thumbnail)

counter = 0

currentProfiles.forEach(item => {

  if (currentElements[counter] === undefined) {
     
  }

  thumbnailElement = item.parentElement.parentElement.parentElement.parentElement
  thumbnailElementMetaData = thumbnailElement.firstElementChild.firstElementChild
  metadata = thumbnailElement.lastElementChild.children[1]
  channelMetaData = metadata.children[1].firstElementChild.firstElementChild
    .firstElementChild.firstElementChild.firstElementChild
    .firstElementChild.firstElementChild
  statMetaData = metadata.children[1].firstElementChild.children[1]

  thumbnailElementMetaData.href = currentElements[counter].videoUrl
  thumbnailElement.firstElementChild.firstElementChild.children[1].firstElementChild.src = currentElements[counter].thumbnailUrl
  metadata.firstElementChild.children[1].firstElementChild.innerText = currentElements[counter].videoTitle
  channelMetaData.href = currentElements[counter].channelUrl
  item.src = currentElements[counter].channelImg
  channelMetaData.innerText = currentElements[counter].channelName
  statMetaData.firstElementChild.innerText = currentElements[counter].views
  statMetaData.children[1].innerText = currentElements[counter].date

  //Change OnClickEvent for Thumbnail Clicks
  thumbnailElement.addEventListener("click", (e) => {
    window.location = currentElements[0].videoUrl
  })

  counter++

})

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
