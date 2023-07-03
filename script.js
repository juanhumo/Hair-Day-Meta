function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';
  }
  
  function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
  }
  

  function deployNavbar() {
    var navbarLinks = document.getElementById('nav_bar_links');
    navbarLinks.classList.toggle('visible');
  }
  
  function hideNavbar() {
    var navbarLinks = document.getElementById('nav_bar_links');
    navbarLinks.classList.remove('visible');
  }
  