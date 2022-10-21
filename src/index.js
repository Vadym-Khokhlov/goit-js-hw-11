import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import { fetchImages } from './fetchImages';
import { galleryMarkupMaker } from './renderImageGallery';

export const refs = {
  searchForm: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  // buttonLoad: document.querySelector('.load-more'),
};

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

// console.log(refs.searchForm);
refs.searchForm.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(e) {
  e.preventDefault();
  let searchInput = e.currentTarget.searchQuery.value;
  const response = await fetchImages(searchInput);
  galleryMarkupMaker(response.hits);
  // if (response === '') {
  //   Notify.info(
  //     'Sorry, there are no images matching your search query. Please try again.'
  //   );
  // }
  // //   if (response.data.hits.length !== 0) {
  // //     Notiflix.Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
  //
}
