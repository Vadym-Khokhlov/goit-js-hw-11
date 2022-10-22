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

refs.searchForm.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(e) {
  e.preventDefault();
  let searchInput = e.currentTarget.searchQuery.value.trim();
  const response = await fetchImages(searchInput);
  const totalPages = response.totalHits / 40;
  if (searchInput === '') {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    clearMarkup();
    return;
  }
  if (response.hits.length !== 0) {
    Notiflix.Notify.info(`Hooray! We found ${response.totalHits} images.`);
    makeGalleryMarkup(response.hits);
  }
}
let lightbox = new SimpleLightbox('.gallery a', {});

function clearMarkup() {
  refs.gallery = '';
}
