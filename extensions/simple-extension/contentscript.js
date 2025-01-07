console.log("I am content script");

// SEND to MESSAGE FROM CONTENT_SCRIPT TO BACKGROUND_SCRIPT

chrome.runtime.sendMessage({ message: "hi i am content script" }, (res) => {
  console.log(res.message);
});

// LISTEN to MESSAGE FROM  BACKGROUND_SCRIPT TO CONTENT_SCRIPT
chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  console.log("req", req, req.message);
  console.log(sender);

  if (req.message === "turn_blue") {
    document.body.style.borderColor = "blue";
  }
  sendRes({ message: "Responce from contentscript.js" });
});
