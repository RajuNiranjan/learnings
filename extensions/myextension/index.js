async function sayHello() {
  try {
    // Get the currently active tab in the current window
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab && tab.id) {
      // Inject a script into the active tab
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          alert("Hello from my extension!");
        },
      });
    } else {
      console.error("No active tab found.");
    }
  } catch (error) {
    console.error("Error executing script:", error);
  }
}

// Add click event listener to the button
document.getElementById("myButton").addEventListener("click", sayHello);
