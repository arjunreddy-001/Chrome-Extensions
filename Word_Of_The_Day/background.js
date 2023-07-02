// Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name === "FETCH_WORDS") {
    const apiUrl = "https://api.quotable.io/random";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => response({ apiUrl, data, sender }));
  }
  return true;
});
