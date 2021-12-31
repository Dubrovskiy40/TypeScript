import { renderBlock } from './lib.js'

const getTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
};

const getNextMonthLastDay = () => {
  const today = new Date();

  return new Date(today.getFullYear(), today.getMonth() + 2, 0);
};

const getPlusTwoDay = (arrival: Date) => {
  const leaving = new Date(arrival);
  leaving.setDate(leaving.getDate() + 2);

  return leaving;
};

const addZero = (dateNumber: number): string => {
  const isSingle = dateNumber < 10;

  return (isSingle ? '0' : '') + dateNumber;
};

const getDateString = (date: Date) => {
  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());

  return `${year}-${month}-${day}`;
};

interface SearchFormData {
  dateIn: string,
  dateOut: string,
  maxPrice: number
}
const formValue: SearchFormData = {
  dateIn: '',
  dateOut: '',
  maxPrice: null
};

const search = (e, SearchFormData): void => {
  e.preventDefault();
  console.log('Данные для отправки на сервер');
  console.log(SearchFormData);
}

export function renderSearchFormBlock (arrivalDate: Date = getTomorrow(), leavingDate: Date = getPlusTwoDay(arrivalDate)) {
  const arrivalString = getDateString(arrivalDate);
  const leavingString = getDateString(leavingDate);
  const minDate = getDateString(new Date());
  const maxDate = getDateString(getNextMonthLastDay());

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
            <input id="check-in-date" type="date" value=${arrivalString} min="${minDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${leavingString} min="${minDate}" max="${maxDate}" name="checkout" />
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
}
