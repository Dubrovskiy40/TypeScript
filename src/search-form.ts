import { renderBlock } from './lib.js'

function getChangeDay(num: number) : string {
  let day: Date = new Date();
  day.setDate(day.getDate() + num);
  return day.toLocaleDateString().split(".").reverse().join(".");
}

export function renderSearchFormBlock (dateIn: string = getChangeDay(1), dateOut: string = getChangeDay(3)) {

  renderBlock(
    'search-form-block',
    `
    <form onsubmit="search(e)">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>-->
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${dateIn} min="${getChangeDay(0)}" max="${getChangeDay(30)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${dateOut} min="${getChangeDay(3)}" max="${getChangeDay(30)}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="submit">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
};

// function search(e): void {
//   console.log('Данные для отправки на сервер');
//   e.preventDefault();
// };
