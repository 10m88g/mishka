//initialise basic functions, that prepare page for js logic
function init() {
  hideNavbar();
}

function catalogInit() {
  hideNavbar();
  hoverClasses();

  $(window).on("resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth >= 768) {
      $(".catalog-item__info--video").addClass("catalog-item--hover-element");
      $(".catalog-item__title--video").addClass("catalog-item--hover-element");
    } else {
      $(".catalog-item__info--video").addClass("catalog-item--hover-element");
      $(".catalog-item__title--video").removeClass("catalog-item--hover-element");
    };

    hoverProcessing();
  });
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

function hoverClasses() {

  var viewportWidth = $(window).width();
  if (viewportWidth >= 768) {
    $(".catalog-item__info--video").addClass("catalog-item--hover-element");
    $(".catalog-item__title--video").addClass("catalog-item--hover-element");
  } else {
    $(".catalog-item__info--video").addClass("catalog-item--hover-element");
    $(".catalog-item__title--video").removeClass("catalog-item--hover-element");
  };

  hoverProcessing();
}

function hoverProcessing() {

  var hover = {boxShadow: '0px 7px 10px 0px #d3d2d2'};
  var active = {boxShadow: '0px 3px 5px -2px #d3d2d2'};
  var initial = {boxShadow: 'none'};

    $(".catalog-item--hover-element").hover(function() {

      $(".catalog-item--hover-element").css(hover);

    }, function() { //if not :hover

      $(".catalog-item--hover-element").css(initial);

    })

    .mousedown(function() {

      $(".catalog-item--hover-element").css(active);

      })
    .mouseup(function() {

      $(".catalog-item--hover-element").css(hover);

    });;

}
