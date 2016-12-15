function init() {
  hideNavbar();
  prepareCartButtons();
  prepareCartLinks();
}


function hideNavbar() {
  var menuOpened = false;
  var elements = document.getElementsByClassName("navbar__menu-item");
  Array.prototype.forEach.call(elements, function(element) {
    if (!element.classList.contains("navbar__logo-wrapper")) {
      element.classList.add("navbar__menu-item--hidden");
    }
  });
}

function prepareCartButtons() {
  var form = document.getElementById("week-product-form");
  try {
    form.removeAttribute("action");
  } catch (e) {
    console.log("no forms on page");
  }
}

function prepareCartLinks() {
  var buttonsList = document.getElementsByClassName("catalog-item__to-cart-link");
  for (var i = 0; i < buttonsList.length; ++i) {
    buttonsList[i].href="#";
  }
}

function hideModal() {
  var modal = document.getElementById("modal-window");
  modal.classList.add("modal--hidden");
}

function viewModal() {
  var modal = document.getElementById("modal-window");
  modal.classList.remove("modal--hidden");
  return false;
}

function navbarButtonClick() {

  var button = document.getElementsByClassName("navbar__nav-button")[0];
  var elements = document.getElementsByClassName("navbar__menu-item");

  for (var i = 1; i < elements.length; ++i) {
    var element = elements[i];
    if (element.classList.contains("navbar__menu-item--hidden")) {
      element.classList.remove("navbar__menu-item--hidden");
      menuOpened = true;
    }
    else {
      element.classList.add("navbar__menu-item--hidden");
      menuOpened = false;
    }
  }

  (menuOpened) ? button.classList.add("navbar__menu-logo--close") : button.classList.remove("navbar__menu-logo--close");
}
