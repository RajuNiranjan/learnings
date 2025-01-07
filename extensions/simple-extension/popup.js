let button = document.getElementById("btn1");
button.addEventListener("click", clickFunction);

function clickFunction() {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";

  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    chrome.tabs.sendMessage(tab[0].id, { message: "turn_blue" });
  });
}
