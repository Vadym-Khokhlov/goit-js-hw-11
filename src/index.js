import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchBox: document.getElementById('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

function onSearchInput(e) {
  const inputValue = e.target.value.trim();
  if (inputValue === '') {
    clearMarkup();
    return;
  } else {
    fetchCountries(inputValue)
      .then(countriesList => {
        if (countriesList.length > 10) {
          clearMarkup();
          Notify.info(
            `Too many matches found. Please enter a more specific name.`
          );
          return;
        }
        if (countriesList.length === 1) {
          clearMarkup();
          renderCountryInfoMarkup(countriesList);
        } else {
          clearMarkup();
          renderCountryListMarkup(countriesList);
        }
      })
      .catch(error => {
        clearMarkup();
        Notify.failure(`Oops, there is no country with that name`);
      });
  }
}

function renderCountryListMarkup(countries) {
  refs.countryList.innerHTML = countries
    .map(({ name, flags }) => listMarkup({ name, flags }))
    .join('');
}

function renderCountryInfoMarkup(country) {
  refs.countryList.innerHTML = country
    .map(({ name, capital, population, flags, languages }) =>
      infoMarkup({ name, capital, population, flags, languages })
    )
    .join('');
}

function listMarkup({ name, flags }) {
  return `<li class='country-item'>
    <img src='${flags.svg}' alt='${name}' width="40" height="30" />
    <h2 class="country-name">${name.official}</h2>
  </li>`;
}

function infoMarkup({ name, capital, population, flags, languages }) {
  return `<div class='country-card'>
    <img src='${flags.svg}' alt='${name}' width="60" height="40"/>
    <h2>Country: ${name.official}</h2>
    <p>Capital: ${capital}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${Object.values(languages)}</p>
  </div>`;
}

function clearMarkup() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

refs.searchBox.addEventListener(
  'input',
  debounce(onSearchInput, DEBOUNCE_DELAY)
);
