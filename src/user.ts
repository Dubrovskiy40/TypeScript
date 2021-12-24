import { renderBlock } from './lib.js'

export function renderUserBlock (nameUser: string, linkToAvatar: string, favoriteItemsAmount: number) : void  {
  const favoritesCaption: number | string = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems: boolean = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${linkToAvatar}" alt="${nameUser}"/>
      <div class="info">
          <p class="name">${nameUser}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
