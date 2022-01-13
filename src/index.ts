import {getSearch, getDateString, getPlusTwoDays, renderSearchFormBlock} from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

type User = {userName: string, avatarUrl: string};

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
}
function setItemFavorites(key, value) {
  try {
    return window.localStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
}
setItemUser('user', JSON.stringify(user));
setItemFavorites('favoritesAmount', '3');

// //получаем данные из localStorage
function getItemUser(key) {
  try {
    return window.localStorage.getItem(key) as unknown;
  } catch (e) {
    console.log(e)
  }
}

function getUserData(): User | null {
  try {
    const json = getItemUser('user') as unknown as string;
    const user = JSON.parse(json);
    return user;
  } catch (e) {
    console.error(e)
  }
}

function getFavoritesAmount(key): number {
  try {
    return parseInt(window.localStorage.getItem(key)) as unknown as number;
  } catch (e) {
    console.log(e)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const { userName, avatarUrl } = getUserData();
  renderUserBlock(userName, avatarUrl, getFavoritesAmount('favoritesAmount'));
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  );
  getDateChange();
  getSearch();
});

function getDateChange() {
  const checkInInput = document.querySelector('#check-in-date') as HTMLInputElement;
  const checkOutInput = document.querySelector('#check-out-date') as HTMLInputElement;
  checkInInput.addEventListener('input',(event) => {
    event.preventDefault();
    const checkOutDate = getPlusTwoDays(new Date(checkInInput.value))
    checkOutInput.value = getDateString(checkOutDate)
  })
}
