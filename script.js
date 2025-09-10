function showPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");

  // Trigger animations
  setTimeout(() => {
    document.querySelector("#page2 .bounce-in").style.animation =
      "bounceIn 1s ease-out";
    document.querySelector("#page2 .slide-in").style.animation =
      "slideIn 0.8s ease-out";
  }, 100);
}

function showPage1() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");

  // Trigger animations
  setTimeout(() => {
    document.querySelector("#page1 .bounce-in").style.animation =
      "bounceIn 1s ease-out";
    document.querySelector("#page1 .slide-in").style.animation =
      "slideIn 0.8s ease-out";
  }, 100);
}

// Add some interactive sparkles
document.addEventListener("mousemove", function (e) {
  if (Math.random() > 0.98) {
    createSparkle(e.clientX, e.clientY);
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "💙";
  sparkle.style.position = "fixed";
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.fontSize = "20px";
  sparkle.style.zIndex = "1000";
  sparkle.style.animation = "sparkle 1s ease-out forwards";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'97cbad88f5bcfdc2',t:'MTc1NzQ3MzI1Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
