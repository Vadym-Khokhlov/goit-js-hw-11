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

export function makeGalleryMarkup(response) {
  const markup = response
    .map(res => {
      return `<div class="photo-card">
      <a class="gallery-link" href="${res.largeImageURL}" >
            <img class="photo-image" src="${res.webformatURL}" alt="${res.tags}" loading="lazy"/></a>
            <div class="info">
            <p class="info-item">
              <b>Likes:</b><span>${res.likes}</span>
            </p>
            <p class="info-item">
              <b>Views:</b><span>${res.views}</span>
            </p>
            <p class="info-item">
              <b>Comments:</b><span>${res.comments}</span>
            </p>
            <p class="info-item">
              <b>Downloads:</b><span>${res.downloads}</span>
            </p>
            </div>
            </div>`;
    })
    .join('');
  refs.gallery.insertAdjacentHTML('afterbegin', markup);
}

// export function makeGalleryMarkup(photos) {
//   const {
//     webformatURL,
//     largeImageURL,
//     tags,
//     likes,
//     views,
//     comments,
//     downloads,
//   } = photos;
//   return `<div class="photo-card">
//   <a class="photo-card__link" href="${largeImageURL}"><img class="photo-card__image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//       ${likes}
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//       ${views}
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//       ${comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//       ${downloads}
//     </p>
//   </div>
// </div>`;
// }
//<div class="socials">
{
  /* <ul class="info">
<li class="info__item">
    <svg
      class="info__icon"
      width="20"
      height="20"
    >
      <use
        href="./symbol-defs.svg#icon-like"
      ></use><span>${likes}</span>
    </svg>
  </a>
</li>
<li class="socials__item">
  <a href="" class="socials__link socials__link--dark">
    <svg
      class="socials__icon socials__icon--dark"
      width="20"
      height="20"
    >
      <use
        href="./images/symbol-defs.svg#icon-twitter"
      ></use>
    </svg>
  </a>
</li>
<li class="socials__item">
  <a href="" class="socials__link socials__link--dark">
    <svg
      class="socials__icon socials__icon--dark"
      width="20"
      height="20"
    >
      <use
        href="./images/symbol-defs.svg#icon-facebook"
      ></use>
    </svg>
  </a>
</li>
<li class="socials__item">
  <a href="" class="socials__link socials__link--dark">
    <svg
      class="socials__icon socials__icon--dark"
      width="20"
      height="20"
    >
      <use
        href="./images/symbol-defs.svg#icon-linkedin"
      ></use>
    </svg>
  </a>
</li>
</ul>
</div> */
}

// <span class="info-item">
//             <svg class="icon icon-heart-outline"><use xlink:href="#icon-heart-outline">
//             <symbol id="icon-heart-outline" viewBox="0 0 24 24">
// <path d="M12 20c-0.195 0-0.391-0.057-0.561-0.172-0.225-0.151-5.508-3.73-7.146-5.371-1.831-1.831-2.043-3.777-2.043-5.082 0-2.964 2.411-5.375 5.375-5.375 1.802 0 3.398 0.891 4.375 2.256 0.977-1.365 2.573-2.256 4.375-2.256 2.964 0 5.375 2.411 5.375 5.375 0 1.305-0.212 3.251-2.043 5.082-1.641 1.641-6.923 5.22-7.146 5.371-0.17 0.115-0.366 0.172-0.561 0.172zM7.625 6c-1.861 0-3.375 1.514-3.375 3.375 0 1.093 0.173 2.384 1.457 3.668 1.212 1.212 4.883 3.775 6.293 4.746 1.41-0.971 5.081-3.534 6.293-4.746 1.284-1.284 1.457-2.575 1.457-3.668 0-1.861-1.514-3.375-3.375-3.375s-3.375 1.514-3.375 3.375c0 0.552-0.447 1-1 1s-1-0.448-1-1c0-1.861-1.514-3.375-3.375-3.375z"></path>
// </symbol></use></svg><p>${res.likes}<p></span>
// <span class="info-item">
// <svg class="icon icon-heart-outline"><use xlink:href="#icon-heart-outline">
// <symbol id="icon-heart-outline" viewBox="0 0 24 24">
// <path d="M12 20c-0.195 0-0.391-0.057-0.561-0.172-0.225-0.151-5.508-3.73-7.146-5.371-1.831-1.831-2.043-3.777-2.043-5.082 0-2.964 2.411-5.375 5.375-5.375 1.802 0 3.398 0.891 4.375 2.256 0.977-1.365 2.573-2.256 4.375-2.256 2.964 0 5.375 2.411 5.375 5.375 0 1.305-0.212 3.251-2.043 5.082-1.641 1.641-6.923 5.22-7.146 5.371-0.17 0.115-0.366 0.172-0.561 0.172zM7.625 6c-1.861 0-3.375 1.514-3.375 3.375 0 1.093 0.173 2.384 1.457 3.668 1.212 1.212 4.883 3.775 6.293 4.746 1.41-0.971 5.081-3.534 6.293-4.746 1.284-1.284 1.457-2.575 1.457-3.668 0-1.861-1.514-3.375-3.375-3.375s-3.375 1.514-3.375 3.375c0 0.552-0.447 1-1 1s-1-0.448-1-1c0-1.861-1.514-3.375-3.375-3.375z"></path>
// </symbol></use></svg><p>${res.views}<p></span>
// <span class="info-item">
//             <svg class="icon icon-heart-outline"><use xlink:href="#icon-heart-outline">
//             <symbol id="icon-heart-outline" viewBox="0 0 24 24">
// <path d="M12 20c-0.195 0-0.391-0.057-0.561-0.172-0.225-0.151-5.508-3.73-7.146-5.371-1.831-1.831-2.043-3.777-2.043-5.082 0-2.964 2.411-5.375 5.375-5.375 1.802 0 3.398 0.891 4.375 2.256 0.977-1.365 2.573-2.256 4.375-2.256 2.964 0 5.375 2.411 5.375 5.375 0 1.305-0.212 3.251-2.043 5.082-1.641 1.641-6.923 5.22-7.146 5.371-0.17 0.115-0.366 0.172-0.561 0.172zM7.625 6c-1.861 0-3.375 1.514-3.375 3.375 0 1.093 0.173 2.384 1.457 3.668 1.212 1.212 4.883 3.775 6.293 4.746 1.41-0.971 5.081-3.534 6.293-4.746 1.284-1.284 1.457-2.575 1.457-3.668 0-1.861-1.514-3.375-3.375-3.375s-3.375 1.514-3.375 3.375c0 0.552-0.447 1-1 1s-1-0.448-1-1c0-1.861-1.514-3.375-3.375-3.375z"></path>
// </symbol></use></svg><p>${res.comments}<p></span>
// <span class="info-item">
//             <svg class="icon icon-heart-outline"><use xlink:href="#icon-heart-outline">
//             <symbol id="icon-heart-outline" viewBox="0 0 24 24">
// <path d="M12 20c-0.195 0-0.391-0.057-0.561-0.172-0.225-0.151-5.508-3.73-7.146-5.371-1.831-1.831-2.043-3.777-2.043-5.082 0-2.964 2.411-5.375 5.375-5.375 1.802 0 3.398 0.891 4.375 2.256 0.977-1.365 2.573-2.256 4.375-2.256 2.964 0 5.375 2.411 5.375 5.375 0 1.305-0.212 3.251-2.043 5.082-1.641 1.641-6.923 5.22-7.146 5.371-0.17 0.115-0.366 0.172-0.561 0.172zM7.625 6c-1.861 0-3.375 1.514-3.375 3.375 0 1.093 0.173 2.384 1.457 3.668 1.212 1.212 4.883 3.775 6.293 4.746 1.41-0.971 5.081-3.534 6.293-4.746 1.284-1.284 1.457-2.575 1.457-3.668 0-1.861-1.514-3.375-3.375-3.375s-3.375 1.514-3.375 3.375c0 0.552-0.447 1-1 1s-1-0.448-1-1c0-1.861-1.514-3.375-3.375-3.375z"></path>
// </symbol></use></svg><p>${res.downloads}<p></span>
//           </div>
