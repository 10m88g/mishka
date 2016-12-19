//initialise basic functions, that prepare page for js logic
function init() {
  hideNavbar();
}

//add --hidden class to all menu elements excluding logo and menu open/close button
function hideNavbar() {
  var menuOpened = false;
  var elements = document.getElementsByClassName("navbar__menu-item");
  Array.prototype.forEach.call(elements, function(element) {
    if (!element.classList.contains("navbar__logo-wrapper")) {
      element.classList.add("navbar__menu-item--hidden");
    }
  });
}

//adds --hidden class to modal window
function hideModal() {
  var modal = document.getElementById("modal-window");
  modal.classList.add("modal--hidden");
}

//removes --hidden class of modal window
function viewModal() {
  var modal = document.getElementById("modal-window");
  modal.classList.remove("modal--hidden");
  return false;
}

//hides menu elements on menu button click and changes background of button
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
