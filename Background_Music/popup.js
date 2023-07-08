const selectElement = document.querySelector("select");

document.querySelector("#play").addEventListener("click", () => {
  console.log("play");
  chrome.runtime.sendMessage({
    type: "play",
    data: { source: selectElement.value, volume: 0.2 },
  });
});

document.querySelector("#pause").addEventListener("click", () => {
  console.log("pause");
  chrome.runtime.sendMessage({
    type: "pause",
  });
});
