async function createOffscreen() {
  if (await chrome.offscreen.hasDocument()) return;

  await chrome.offscreen.createDocument({
    url: chrome.runtime.getURL("background.html"),

    // Below line will also works
    // url: "background.html"

    reasons: ["AUDIO_PLAYBACK"],

    /*
          Valid reasons -
          1. AUDIO_PLAYBACK
          2. BLOBS
          3. CLIPBOARD
          4. DISPLAY_MEDIA
          5. DOM_PARSER
          6. IFRAME_SCRIPTING
          7. TESTING
          8. USER_MEDIA
          9. WEB_RTC
      */

    justification: "testing the offscreen API",
  });
}

chrome.runtime.onMessage.addListener(async (msg) => {
  await createOffscreen();
  await chrome.runtime.sendMessage({
    ...msg,
    offscreen: true,
  });
});
