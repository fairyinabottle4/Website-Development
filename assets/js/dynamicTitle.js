

window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Don't leave!!!";
  let blinkEvent = null;

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      blink();
    } else {
      document.title = pageTitle;
      clearInterval(blinkEvent);
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "./assets/images/favicon.png";
    }
  });

  function blink() {
    blinkEvent = setInterval(function(){
      if (document.title === attentionMessage) {
        document.title = pageTitle;
        favicon.href = "./assets/images/favicon.png";
      } else {
        document.title = attentionMessage;
        favicon.href = "./assets/images/sad.png";
      }
    }, 1000);
  }
};