chrome.webNavigation.onCompleted.addListener(
  (e) => {
    console.log(e);
  },
  { url: [{ hostSuffix: "instagram.com" }] }
);
