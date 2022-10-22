import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import { fetchImages } from './fetchImages';
import { makeGalleryMarkup } from './renderImageGallery';

export const refs = {
  searchForm: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  buttonLoad: document.querySelector('.load-more'),
};
let page = 1;

refs.searchForm.addEventListener('submit', e => {
  refs.gallery.innerHTML = '';
  onSearchSubmit(e);
  refs.buttonLoad.classList.add('is-hidden');
});

async function onSearchSubmit(e) {
  e.preventDefault();
  let searchInput = e.currentTarget.searchQuery.value.trim();
  const response = await fetchImages(searchInput);
  if (searchInput === '' || response.totalHits === 0) {
    clearMarkup();
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  try {
    if (response.hits.length !== 0) {
      clearMarkup();
      Notiflix.Notify.info(`Hooray! We found ${response.totalHits} images.`);
      makeGalleryMarkup(response.hits);
      lightbox.refresh();
      refs.buttonLoad.classList.remove('is-hidden');
    }
  } catch (error) {
    console.log(error);
  }
}
refs.buttonLoad.addEventListener('click', loadMoreImages);

async function loadMoreImages() {
  try {
    refs.buttonLoad.classList.add('is-hidden');
    page += 1;
    const response = await fetchImages(searchInput, page);
    makeGalleryMarkup(response.hits);
  } catch (error) {
    console.log(error);
  }
}

let lightbox = new SimpleLightbox('.gallery a', {});

function clearMarkup() {
  refs.gallery.innerHTML = '';
}
