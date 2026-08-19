var header = document.getElementById('siteHeader');
  var burger = document.getElementById('burgerBtn');
  burger.addEventListener('click', function(){
    var isOpen = header.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.querySelectorAll('#navLinks a').forEach(function(link){
    link.addEventListener('click', function(){
      header.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
