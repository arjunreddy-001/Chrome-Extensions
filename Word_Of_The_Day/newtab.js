// Send message to background
chrome.runtime.sendMessage({ name: "FETCH_WORDS" }, (res) => {
  // After recieving response
  // Update content in newtab.html
  document.querySelector("h1").innerHTML = res.data.author;
  document.querySelector("p").innerHTML = res.data.content;
});
