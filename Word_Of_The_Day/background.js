// Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name === "FETCH_WORDS") {
    // https://api.quotable.io/random
    /*
        {
            "id": "",
            "content": "",
            "author": "",
            "authorSlug": "",
            "tags": ["", ""],
            "dateAdded": "",
            "dateModified": "",
            "length": 76
        }
    */

    const apiUrl = "https://api.quotable.io/random";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => response({ apiUrl, data, sender }));
  }
  return true;
});
