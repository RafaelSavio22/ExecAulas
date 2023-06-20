// Add animation to the submenu
document.addEventListener("DOMContentLoaded", function() {
    var submenus = document.getElementsByClassName("submenu");
  
    for (var i = 0; i < submenus.length; i++) {
      var submenu = submenus[i];
      submenu.style.animationDelay = i * 0.1 + "s";
    }
  });
  