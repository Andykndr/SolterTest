window.addEventListener('DOMContentLoaded', () => {
  const aboutUsNone = document.querySelector('.about_us_none');
  arrowOpen = document.querySelector('.arrow_open');
  hamburger = document.querySelector('.hamburger');
  menuLinks = document.querySelector('.menu_links');
  aboutUsLink = document.querySelector('.about_us_link');
  menuItem = document.querySelectorAll('.menu_item');
  modalLogo = document.querySelector('.modal_logo');
  modal = document.querySelector('.modal');
  modalClose = document.querySelector('.modal_close');
  modalLinkMjm = document.querySelector('.modal_link_mjm');

  modalLogo.addEventListener('click', () => {
    modal.classList.add('modal_active');
    header.classList.add;
  });
  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
  });
  modalLinkMjm.addEventListener('click', () => {
    modal.classList.remove('modal_active');
  });
  arrowOpen.addEventListener('click', () => {
    arrowOpen.classList.toggle('arrow_close');
    aboutUsNone.classList.toggle('about_us');
  });
  aboutUsLink.addEventListener('click', () => {
    arrowOpen.classList.toggle('arrow_close');
    aboutUsNone.classList.toggle('about_us');
  });
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menuLinks.classList.toggle('menu_links_active');
  });
  menuItem.forEach((i) => {
    i.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menuLinks.classList.toggle('menu_links_active');
    });
  });
});
