let lastScrollY = window.scrollY;
const barRight = document.querySelector('.category__bar-right');
const barLeft = document.querySelector('.category__bar-left');
const menu = document.getElementById('dropdownMenu');
const dropdown = document.querySelector('.category__dropdown'); 

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Проверяем ширину экрана
  if (window.innerWidth > 430) {
    if (currentScrollY > lastScrollY) {
      // Скролл вниз — скрываем панели
      barRight?.classList.add('category__bar-hidden');
      barLeft?.classList.add('category__bar-hidden');

      // Скрываем меню, если оно открыто
      if (dropdown && dropdown.classList.contains('category__dropdown--visible')) {
        dropdown.classList.remove('category__dropdown--visible');
      }

      if (menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
      }
    } else {
      // Скролл вверх — показываем панели
      barRight?.classList.remove('category__bar-hidden');
      barLeft?.classList.remove('category__bar-hidden');
    }
  }
  // Если ширина <= 430px — ничего не скрываем, меню остается открытым при скролле

  lastScrollY = currentScrollY;
});


const cartBadge = document.querySelector('.cart-badge');

function updateCartCount(count) {
  if (count > 0) {
    cartBadge.textContent = count;
    cartBadge.style.display = 'flex';
  } else {
    cartBadge.style.display = 'none';
  }
}

// Пример
updateCartCount(5); // покажет кружок с цифрой 5

const langElements = document.querySelectorAll('.header__panel-lang .lang');

langElements.forEach((lang) => {
  lang.addEventListener('click', () => {
    // Снимаем актив у всех
    langElements.forEach((el) => el.classList.remove('active'));
    // Добавляем актив выбранному
    lang.classList.add('active');

    // Можно тут добавить вызов функции переключения языка на сайте, например:
    // switchLanguage(lang.textContent);
  });
});

const btn = document.querySelector('.header__panel-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('show');

});




const menuItems = document.querySelectorAll('.dropdown__menu-li');

menuItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();

    // Закрываем все остальные submenu
    document.querySelectorAll('.submenu.show').forEach((openSubmenu) => {
      if (openSubmenu !== item.querySelector('.submenu')) {
        openSubmenu.classList.remove('show');
      }
    });

    const submenu = item.querySelector('.submenu');
    if (submenu) {
      submenu.classList.toggle('show');
    }
  });
});

// Закрываем submenu при клике вне меню
document.addEventListener('click', () => {
  document.querySelectorAll('.submenu.show').forEach((openSubmenu) => {
    openSubmenu.classList.remove('show');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnEvents = document.getElementById("dropdownEvents");


  btnEvents.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("category__dropdown--visible");
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".category__dropdown") && !e.target.closest("#dropdownEvents")) {
      dropdown.classList.remove("category__dropdown--visible");
    }
  });
});


const submenuMenu = document.querySelector('.submenu__menu');
const submenuTitle = submenuMenu.querySelector('.submenu__title');

document.querySelectorAll('.submenu__title').forEach(title => {
  title.addEventListener('click', () => {
    if (window.innerWidth <= 430) {
      // Если это заголовок подменю (с стрелкой), скрываем подменю и показываем главное меню
      if (submenuMenu.classList.contains('show')) {
        submenuMenu.classList.remove('show');
        menuItemsenu.classList.add('show');
      }
    }
  });
});

// Пример открытия подменю при клике на заголовок в главном меню (упрощенно)
document.querySelector('.dropdown__menu .submenu__title').addEventListener('click', () => {
  if (window.innerWidth <= 430) {
    menu.classList.remove('show');
    submenuMenu.classList.add('show');
  }
});







