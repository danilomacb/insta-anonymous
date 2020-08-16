chrome.webNavigation.onCompleted.addListener(
  (e) => {
    console.log("entering on instagram");
  },
  { url: [{ hostSuffix: "instagram.com" }] }
);
