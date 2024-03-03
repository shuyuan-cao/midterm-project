function checkHomepage() {
    var currentURL = window.location.href;
    if (currentURL.includes("home.html") || currentURL.endsWith("/")) {
      alert("You are already at homepage");
    } else {
      window.location.href = "home.html";
    }
  }