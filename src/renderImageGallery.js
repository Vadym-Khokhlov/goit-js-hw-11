import { refs } from '.';

// webformatURL - ссылка на маленькое изображение для списка карточек.
// largeImageURL - ссылка на большое изображение.
// tags - строка с описанием изображения. Подойдет для атрибута alt.
// likes - количество лайков.
// views - количество просмотров.
// comments - количество комментариев.
// downloads - количество загрузок.

// function clearMarkup() {
//   refs.countryInfo.innerHTML = '';
//   refs.countryList.innerHTML = '';
// }

export function galleryMarkupMaker(response) {
  const markup = response
    .map(res => {
      return `<div class="photo-card">
      <a href="${res.webformatURL}">
            <img src="${res.largeImageURL}" alt="${res.tags}" loading="lazy" width="600" height="400"/></a>
            <div class="info">
              <p class="info-item">
                <b>Likes:</b>
              </p>
              <p class="info-item">
                <b>Views:</b>
              </p>
              <p class="info-item">
                <b>Comments:</b>
              </p>
              <p class="info-item">
                <b>Downloads:</b>
              </p>
            </div>
          </div>`;
    })
    .join('');
  refs.gallery.insertAdjacentHTML('afterbegin', markup);
}
