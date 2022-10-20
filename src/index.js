import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const url = 'https://pixabay.com/api/';
const params = {
  key: '30575180-f51bf292afceb69c3d087b7fc',
  orientation: 'horizontal',
  q: '',
  image_type: 'photo',
  safesearch: true,
};

const refs = {
  searchForm: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  buttonLoad: document.querySelector('.load-more'),
};
