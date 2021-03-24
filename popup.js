chrome.storage.local.get(
  ["server", "port", "username", "password"],
  (proxySettings) => {
    document.getElementById("server").value = proxySettings.server;
    document.getElementById("port").value = proxySettings.port;
    document.getElementById("username").value = proxySettings.username;
    document.getElementById("password").value = proxySettings.password;
  }
);

document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
  event.preventDefault();

  let proxySettings = {
    server: document.getElementById("server").value,
    port: document.getElementById("port").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  chrome.storage.local.set(proxySettings);
});
