import { refs } from '.';

export function makeGalleryMarkup(response) {
  const markup = response
    .map(res => {
      return `<div class="photo-card">
      <a class="gallery-link" href="${res.largeImageURL}" >
            <img class="photo-image" src="${res.webformatURL}" alt="${res.tags}" loading="lazy"/></a>
            <div class="info">
            <p class="info-item"><b>Likes:</b>
            <span>${res.likes}</span>
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
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
