import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

const user = {
  userName: 'Wade Warren',
  avatarUrl: '/img/avatar.png'
};

// //заводим данные в localStorage
function setItemUser(key, value) {
  try {
    return window.localStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
};
function setItemFavorites(key, value) {
  try {
    return window.localStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
};
setItemUser('user', JSON.stringify(user));
setItemFavorites('favoritesAmount', '1');

// //получаем данные из localStorage
function getItemUser(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    console.log(e)
  }
};

function getUserData(key) : string {
  try {
    const json = getItemUser(key)

    return JSON.parse(json)
  } catch (e) {
    console.error(e)
  }
};

function getFavoritesAmount(key) : number {
  try {
    return parseInt(window.localStorage.getItem(key));
  } catch (e) {
    console.log(e)
  }
};

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(getUserData('user.userName'), getUserData('user.avatarUrl'), getFavoritesAmount('favoritesAmount'));
  renderSearchFormBlock('','');
  renderSearchStubBlock();
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  );
});
