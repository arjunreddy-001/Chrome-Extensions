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

// Send message to background
chrome.runtime.sendMessage({ name: "FETCH_WORDS" }, async (res) => {
  // Wait for response
  console.log(res);

  // Update display on content script
  document.querySelector("h1").innerHTML = res.data.author;
  document.querySelector("p").innerHTML = res.data.content;
});
