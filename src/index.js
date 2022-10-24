import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './fetchImages';
import { makeGalleryMarkup } from './makeGalleryMarkup';

export const refs = {
  searchForm: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  buttonLoad: document.querySelector('.load-more'),
};

let currentPage = 1;
let searchInput = '';

refs.searchForm.addEventListener('submit', e => {
  refs.gallery.innerHTML = '';
  onSearchSubmit(e);
  refs.buttonLoad.classList.add('is-hidden');
});

async function onSearchSubmit(e) {
  e.preventDefault();
  searchInput = e.currentTarget.searchQuery.value;
  currentPage = 1;
  if (searchInput === '') {
    clearMarkup();
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  try {
    searchInput = e.currentTarget.searchQuery.value.trim();
    const response = await fetchImages(searchInput, currentPage);
    if (response.totalHits === 0) {
      clearMarkup();
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    if (response.hits.length !== 0) {
      clearMarkup();
      Notify.success(`Hooray! We found ${response.totalHits} images.`);
      makeGalleryMarkup(response.hits);
      lightbox.refresh();
      refs.buttonLoad.classList.remove('is-hidden');
    }
    if (response.hits.length < 40) {
      refs.buttonLoad.classList.add('is-hidden');
      Notify.info(`That's all`);
    }
  } catch (error) {
    console.log(error);
  }
}

refs.buttonLoad.addEventListener('click', loadMoreImages);

async function loadMoreImages() {
  try {
    currentPage += 1;
    const response = await fetchImages(searchInput, currentPage);
    let quantityHits = response.totalHits;
    let quantityPages = Math.ceil(quantityHits / 40);

    if (quantityPages === currentPage) {
      refs.buttonLoad.classList.add('is-hidden');
      Notify.info(`We're sorry, but you've reached the end of search results.`);
    }
    makeGalleryMarkup(response.hits);
    lightbox.refresh();
  } catch (error) {
    console.log(error);
    clearMarkup();
  }
}

let lightbox = new SimpleLightbox('.gallery a', {});

function clearMarkup() {
  refs.gallery.innerHTML = '';
}
