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
previousElements = history_data[currentState - 1]

//Access Parent Element 
primaryElement = document.querySelector('#primary')
//Get Child Element - But Still Parent
secondaryElement = primaryElement.firstElementChild
//Get Main Element
mainElement = secondaryElement.children[5]
//Delete the Main Element
mainElement.remove()

//MAIN CONTAINER
mainContentElement = document.createElement("div")
mainContentElement.classList.add('video-grid')

//Make the new contents element for each video
currentElements.forEach(video => {

  videoPreview = document.createElement("div")
  videoPreview.classList.add('video-preview')

  mainContentElement.appendChild(videoPreview)

  thumbnailRow = document.createElement('div')
  thumbnailRow.classList.add('thumbnail-row')

  thumbnail = document.createElement('div')
  imgThumbnail = document.createElement('img')
  imgThumbnail.classList.add('thumbnail')
  imgThumbnail.src = video.thumbnailUrl

  videoPreview.appendChild(thumbnailRow)
  thumbnailRow.appendChild(thumbnail)
  thumbnail.appendChild(imgThumbnail)

  videoInfoGrid = document.createElement('div')
  videoInfoGrid.classList.add('video-info-grid')

  channelPicture = document.createElement('div')
  channelPicture.classList.add('channel-picture')
  channelImg = document.createElement('img')
  channelImg.classList.add('profile-picture')
  channelImg.src = video.channelImg

  channelPicture.appendChild(channelImg)
  videoInfoGrid.appendChild(channelPicture)

  videoInfo = document.createElement('div')
  videoInfo.classList.add('video-info')

  videoTitle = document.createElement('p')
  videoTitle.classList.add('video-title')
  videoTitle.innerText = video.videoTitle

  videoAuthor = document.createElement('p')
  videoAuthor.classList.add('video-author')
  videoAuthor.innerText = video.channelName

  videoStats = document.createElement('p')
  videoStats.classList.add('video-stats')
  videoStats.innerText = `${video.views} • ${video.date}`

  videoPreview.appendChild(videoInfoGrid)
  videoInfoGrid.appendChild(videoInfo)
  videoInfo.appendChild(videoTitle)
  videoInfo.appendChild(videoAuthor)
  videoInfo.appendChild(videoStats)
})

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
