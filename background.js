let proxySettings = {
  server: "",
  port: "",
  username: "",
  password: "",
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set(proxySettings);
});

chrome.storage.onChanged.addListener(function (changes) {
  for (let setting in changes) {
    proxySettings[setting] = changes[setting].newValue;
  }
});
