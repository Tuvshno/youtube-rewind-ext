console.log('scraping data...')

//Get Videos that are not playlists
const profiles = document.querySelectorAll('#avatar img[src]')

//console.log(profiles)

///Set up videos array of video objects containing metadata
let videos = []

//Iterate through each and find the metadata
profiles.forEach(item => {
  thumbnailElement = item.parentElement.parentElement.parentElement.parentElement
  thumbnailElementMetaData = thumbnailElement.firstElementChild.firstElementChild
  metadata = thumbnailElement.lastElementChild.children[1]
  channelMetaData = metadata.children[1].firstElementChild.firstElementChild
    .firstElementChild.firstElementChild.firstElementChild
    .firstElementChild.firstElementChild
  statMetaData = metadata.children[1].firstElementChild.children[1]
  
  videoUrl = thumbnailElementMetaData.href
  thumbnailUrl = thumbnailElementMetaData.children[1].childNodes[1].currentSrc
  videoTitle = metadata.firstElementChild.children[1].firstElementChild.innerText
  channelUrl = channelMetaData.href
  channelImg = item.src
  channelName = channelMetaData.innerText
  views = statMetaData.firstElementChild.innerText
  date = statMetaData.children[1].innerText

  let video = {
    videoUrl : videoUrl,
    thumbnailUrl : thumbnailUrl,
    videoTitle : videoTitle,
    channelUrl : channelUrl,
    channelImg : channelImg,
    channelName: channelName,
    views: views,
    date: date
  }

  videos.push(video)
})

//console.log(videos)

const key = 'recommended-history'

//Set up empty array if it local storage doesnt exist
if(localStorage.getItem(key) == null)
  localStorage.setItem(key, '[]')

//Get Items
const old_data = JSON.parse(localStorage.getItem(key))

//Add new values
old_data.unshift(videos)

//Set Items
localStorage.setItem(key, JSON.stringify(old_data))

