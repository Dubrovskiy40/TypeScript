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

export const getPlusTwoDays = (arrival: Date) => {
  const leaving = new Date(arrival);
  leaving.setDate(leaving.getDate() + 2);

  return leaving;
};

const addZero = (dateNumber: number): string => {
  const isSingle = dateNumber < 10;

  return (isSingle ? '0' : '') + dateNumber;
};

export const getDateString = (date: Date) => {
  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());

  return `${year}-${month}-${day}`;
};

interface SearchFormData {
  city?: string,
  checkInDate?: Date,
  checkOutDate?: Date,
  maxPrice?: number
}

export function getSearch(): void {
  const form = document.getElementById('search-form-block');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    search(getSearchInput(), (result) => {
      console.log(result);
    })
  })
}

function getSearchInput() {
  const { value: city } = document.getElementById('city') as HTMLInputElement;
  const { value: checkInDate } = document.getElementById('check-in-date') as HTMLInputElement;
  const { value: checkOutDate } = document.getElementById('check-out-date') as HTMLInputElement;
  const { value: maxPrice } = document.getElementById('max-price') as HTMLInputElement;

  return {
    city,
    checkInDate: checkInDate ? new Date(checkInDate) : null,
    checkOutDate: checkOutDate ? new Date(checkOutDate) : null,
    maxPrice: maxPrice ? Number(maxPrice) : null
  } as SearchFormData
}

function search(searchForm: SearchFormData, resultCallBack: (result: Error | []) => void) {
  console.log(searchForm)
  setTimeout(() => {
    const isError = Math.random() < 0.5
    if (isError) {
      resultCallBack(new Error('error'))
    } else {
      resultCallBack([])
    }
  }, 2000)
}

export function renderSearchFormBlock (arrivalDate: Date = getTomorrow(), leavingDate: Date = getPlusTwoDays(arrivalDate)) {
  const arrivalString = getDateString(arrivalDate);
  const leavingString = getDateString(leavingDate);
  const minDate = getDateString(new Date());
  const maxDate = getDateString(getNextMonthLastDay());

  renderBlock(
    'search-form-block',
    `
    <form>
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
