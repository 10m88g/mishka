function hideNavbar() {
  var elements = document.getElementsByClassName("navbar__menu-item");
  Array.prototype.forEach.call(elements, function(element) {
    if (!element.classList.contains("navbar__logo-wrapper")) {
      element.classList.add("navbar__menu-item--hidden");
    }
  });
}

function navbarButtonClick() {
  var elements = document.getElementsByClassName("navbar__menu-item");
  for (var i = 1; i < elements.length; ++i) {
    var element = elements[i];
    if (element.classList.contains("navbar__menu-item--hidden")) {
      element.classList.remove("navbar__menu-item--hidden");
    }
    else {
      element.classList.add("navbar__menu-item--hidden");
    }
  }
}
