

// refer to question 3 before development starts for scope document

function replaceText() {
    // get text to replace
    var div = document.getElementById("aboutText");
    // define regex text string
    var regex = /Magic/gi;
    var aboutText = div.innerHTML;
  
    div.innerHTML = aboutText.replace(regex, "Something");
  }
  
  function toggleDisplay() {
    // get panel element
    var panel = document.getElementById("moreInfoContent");
  
    // check if panel is expanded
    if (panel.style.display === "block") {
      // collapse panel
      panel.style.display = "none";
    } else {
      // expand panel
      panel.style.display = "block";
    }
  }
  
  // add event listener for panel dispaly
  function addEventListener() {
    var moreInfoTrigger = document.getElementById("moreInfoTrigger");
    moreInfoTrigger.addEventListener("click", toggleDisplay);
  }
  
  // Make self invoking function for loading scripts
  (function() {
    "use strict";
    replaceText();
    addEventListener();
  })();
  
  
  