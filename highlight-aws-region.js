// ==UserScript==
// @name         Highlight AWS Region
// @namespace    https://github.com/davecrumbacher/greasemonkey-scripts
// @version      0.1
// @description  Changes the background and font color of the region name in the AWS console
// @author       Dave Crumbacher
// @match        https://*.aws.amazon.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
  "use strict";
  var $ = window.jQuery;
  var elem;

  if (document.domain.indexOf("quicksight") > -1) {
    waitForKeyElements("button[data-automation-id='global_label_region']", function(node) {
      $("button[data-automation-id='global_label_region']").css({"background": "white", "color": "red", "textShadow": "none", "fontWeight": "bold"});
    });
  }
  else {
    var div = $("#nav-regionMenu");
    if (div.text().toLowerCase().trim() != "global") {
      div.css({"background": "white"});
      div.children("div[class='nav-elt-label']").css({"background": "white", "color": "red", "textShadow": "none", "fontSize": "large", "fontWeight": "bold"});
    }
  }
})();
