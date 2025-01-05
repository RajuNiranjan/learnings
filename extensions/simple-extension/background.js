console.log("i am background script");

//CREATING A NEW TAB
chrome.tabs.onCreated.addListener(function (tab) {
  console.log(tab);
});

// ACTIVATE TAB
chrome.tabs.onActivated.addListener(function (tab) {
  console.log(tab);
});

//BOOK_MARK CREATED
chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
  console.log("id", id, "bookmark", bookmark);
});

// LISTEN to MESSAGE FROM CONTENT_SCRIPT TO BACKGROUND_SCRIPT
chrome.runtime.onMessage.addListener((message, sender, sendRes) => {
  console.log(message);
  console.log(sender);
  sendRes({ message: "Responce from background.js" });
});

// SENT to MESSAGE FROM  BACKGROUND_SCRIPT TO CONTENT_SCRIPT
chrome.tabs.onActivated.addListener(function (tab) {
  console.log(tab);
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      var activeTab = tabs[0];
      console.log("activeTab", activeTab);

      //SEND MESSAGE TO ACTIVE TAB

      chrome.tabs.sendMessage(
        activeTab.id,
        {
          msg: "I am from background script!!!",
        },
        function (res) {
          {
            console.log(res);
          }
        }
      );
    }
  );
});
