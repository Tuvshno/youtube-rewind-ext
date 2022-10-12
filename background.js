//On every tab scrape the data
try {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      if (tab.url === 'https://www.youtube.com/') {
        console.log('Inside YT')

        //Reset State
        chrome.scripting.executeScript({
          files: ['reset-state.js'],
          target: { tabId: tab.id }
        })

        //Execute Scraping Data
        chrome.scripting.executeScript({
          files: ['scrape-data.js'],
          target: { tabId: tab.id }
        })

        //Insert CSS
        chrome.scripting.insertCSS({
          files: ["inject.css"],
          target: { tabId: tab.id }
      })

      }
      else {
        console.log('not inside YT')
      }
    }
  })
} catch (error) {
  console.log(error)
}

//When the action button is clicked rewind
chrome.action.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript({
    files: ['rewind-data.js'],
    target: { tabId: tab.id }
  })
})
