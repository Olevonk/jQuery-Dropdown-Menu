"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Oleksii Fon Krupp
      Date:   05/13/2024

      Filename: project12-01.js
*/

// Show dropdown menu on mouseover and hide on mouseout for submenu items
$(document).ready(function() {
      $("li.submenu").mouseover(function(e) {
          $(e.currentTarget).children("ul").show();
      });
  
      $("li.submenu").mouseout(function(e) {
          $(e.currentTarget).children("ul").hide();
      });
  });                   