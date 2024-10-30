// import './css/styles.css';
// import Notiflix from 'notiflix';
import { searchPictures } from './js/pixabay-api.js';

import {
  renderUserListItems,
  clearMarkup,
  //   hide,
  //   show,
  //   notifySuccess,
} from './js/render-function.js';

let page = 1;
let limit = 15;

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const buttonLoad = document.querySelector('.load-more');
hide();

let name = form.elements.searchQuery;

form.addEventListener('submit', findListOfPictures);
buttonLoad.addEventListener('click', loadAdditionalImage);

async function findListOfPictures(e) {
  e.preventDefault();
  hide();
  clearMarkup();

  if (page > 1) {
    page = 1;
    limit = 15;
  }

  try {
    let query = name.value;

    const images = await searchPictures(query, page);

    if (images.total === 0 || name.value === '') {
      toggleLoader();
      iziToast.warning({
        title: 'Alert',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return clearMarkup();
    }

    renderUserListItems(images);
    toggleLoader();
    // notifySuccess(images);

    if (limit < images.totalHits) {
      show();
    }

    page += 1;
    limit += 15;
  } catch (error) {
    clearMarkup();
    // Notiflix.Notify.failure(
    //   'Sorry, there are no images matching your search query. Please try again.'
    // );
    iziToast.warning({
      title: 'Alert',
      message:
        'Sorry, there are no images matching your search query. Please try again.',
      position: 'topRight',
    });
    hide();
  }
}

async function loadAdditionalImage(query) {
  try {
    let query = name.value;

    const images = await searchPictures(query);

    renderUserListItems(images);
    page += 1;
    limit += 15;

    if (limit >= images.totalHits) {
      throw new Error(images.status);
    }
  } catch (error) {
    // Notiflix.Notify.failure(
    //   "We're sorry, but you've reached the end of search results."
    // );
    iziToast.warning({
      title: 'Alert',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
    hide();
  }
}

// export { gallery, buttonLoad, page };

function hide() {
  buttonLoad.classList.add('unvisible-button');
}

function show() {
  buttonLoad.classList.remove('unvisible-button');
}
function toggleLoader() {
  loader.style.display =
    loader.style.display === 'none' || loader.style.display === ''
      ? 'block'
      : 'none';
}
