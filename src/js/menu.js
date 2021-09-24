import menu from '../menu.json';
import template from '../templates/menuMarkup.hbs';

import refs from './refs';
const { menuList, checkboxInput } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

// Добавление разметки меню
const result = template(menu);
menuList.insertAdjacentHTML('beforeend', result);

// Добавление слушателя событий и изменение темы
checkboxInput.addEventListener('change', onChangeTheme);

function onChangeTheme(event) {
  document.querySelector('body').classList.toggle(DARK);
  document.querySelector('body').classList.toggle(LIGHT);

  let theme = event.target.checked ? DARK : LIGHT;
  localStorage.setItem('theme', theme);
}

let theme = localStorage.getItem('theme');

if (!theme) {
  theme = LIGHT;
  localStorage.setItem('theme', theme);
}

document.querySelector('body').classList.add(theme);

if (theme === LIGHT) {
  checkboxInput.checked = false;
} else {
  checkboxInput.checked = true;
}
