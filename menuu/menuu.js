// Abrir/cerrar submenús individualmente
/*document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();

    const submenu = this.nextElementSibling;

    // Cerrar otros submenús
    document.querySelectorAll('.submenu').forEach(menu => {
      if (menu !== submenu) {
        menu.classList.remove('active');
      }
    });

    // Alternar este
    submenu.classList.toggle('active');
  });
});

// Cerrar todos si se hace clic fuera
document.addEventListener('click', function () {
  document.querySelectorAll('.submenu').forEach(menu => {
    menu.classList.remove('active');
  });
});*/
const overlay = document.getElementById('overlay');
const menuBtns = document.querySelectorAll('.menu-btn');

function closeAll() {
  document.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('active'));
  overlay.style.display = 'none';
}

menuBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();

    const submenu = btn.nextElementSibling;
    const isActive = submenu.classList.contains('active');

    closeAll(); // Cerrar todo

    if (!isActive) {
      submenu.classList.add('active');
      overlay.style.display = 'block';
    }
  });
});

// Cerrar todo si se hace clic fuera del menú y submenús
document.addEventListener('click', e => {
  const clickedInsideMenu = e.target.closest('.navbar') || e.target.closest('.submenu');
  if (!clickedInsideMenu) {
    closeAll();
  }
});

// Cerrar al hacer clic en overlay
overlay.addEventListener('click', closeAll);
