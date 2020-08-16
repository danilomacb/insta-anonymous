chrome.webNavigation.onCompleted.addListener(
  (e) => {
    alert("instagram");
  },
  { url: [{ hostSuffix: "instagram.com" }] }
);
