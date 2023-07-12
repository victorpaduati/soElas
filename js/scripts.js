/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
        
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });


    };



    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
                
            }
            
        });
    });

      

});

// ---------------

var image = document.getElementById('logo');
var navItems = document.querySelectorAll('.nav-item');
var isImageVisible = false;
var areNavItemsVisible = false;

document.addEventListener('scroll', function() {
  var currentScrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;

  if (currentScrollPosition > 0 && !isImageVisible) {
    // Rolagem para baixo para exibir a imagem
    var imagePosition = image.getBoundingClientRect().top;
    if (imagePosition < windowHeight) {
      image.classList.remove('remove');
      isImageVisible = true;
    }
  } else if (currentScrollPosition === 0 && isImageVisible) {
    // Rolagem para cima até o topo da página para ocultar a imagem
    image.classList.add('remove');
    isImageVisible = false;
  }

  if (currentScrollPosition > 0 && !areNavItemsVisible) {
    // Rolagem para baixo para exibir a classe nav-item
    navItems.forEach(function(navItem) {
      var navItemPosition = navItem.getBoundingClientRect().top;
      if (navItemPosition < windowHeight) {
        navItem.classList.remove('remove');
      }
    });
    areNavItemsVisible = true;
  } else if (currentScrollPosition === 0 && areNavItemsVisible) {
    // Rolagem para cima até o topo da página para ocultar a classe nav-item
    navItems.forEach(function(navItem) {
      navItem.classList.add('remove');
    });
    areNavItemsVisible = false;
  }
});
