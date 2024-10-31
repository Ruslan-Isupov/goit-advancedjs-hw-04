import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchPictures } from './js/pixabay-api.js';

import { renderUserListItems, clearMarkup } from './js/render-functions.js';

let page = 1;
let allCards = 15;

const form = document.querySelector('#search-form');
const load = document.querySelector('.loader');
const buttonLoad = document.querySelector('.load-more');

let nameQuery = '';

class LoaderService {
  constructor(el) {
    this.loader = el;
  }

  hide() {
    this.loader.style.display = '';
  }

  show() {
    this.loader.style.display = 'block';
  }
}

function smoothScroll() {
  const galleryCard = document.querySelector('.photo-card');
  if (galleryCard) {
    const cardHeight = galleryCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}

const loadMoreBtn = new LoaderService(buttonLoad);
const loader = new LoaderService(load);

form.addEventListener('submit', findListOfPictures);

async function findListOfPictures(e) {
  e.preventDefault();
  nameQuery = form.elements.searchQuery.value;
  if (nameQuery === '') {
    iziToast.warning({
      title: 'Alert',
      message: 'You need to put world for searching',
      position: 'topRight',
    });
    return;
  }
  clearMarkup();
  try {
    loader.show();
    loadMoreBtn.hide();
    if (page > 1) {
      page = 1;
      allCards = 15;
    }
    const images = await searchPictures(nameQuery, page);
    if (images.total === 0) {
      iziToast.warning({
        title: 'Alert',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      loader.hide();
      return clearMarkup();
    }
    renderUserListItems(images);
    smoothScroll();
    loader.hide();
    loadMoreBtn.show();
    buttonLoad.addEventListener('click', loadAdditionalImage);
  } catch (err) {
    clearMarkup();
    iziToast.warning({
      title: 'Alert',
      message: err.message,
      position: 'topRight',
    });
    loader.hide();
  } finally {
    form.reset();
  }
}

async function loadAdditionalImage() {
  loader.show();
  loadMoreBtn.hide();
  page += 1;
  allCards += 15;
  try {
    const images = await searchPictures(nameQuery, page);
    if (images.totalHits <= allCards) {
      renderUserListItems(images);
      loadMoreBtn.hide();
      loader.hide();
      iziToast.warning({
        title: 'Alert',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      allCards = 15;
      page = 1;
      buttonLoad.removeEventListener('click', loadAdditionalImage);

      return;
    }
    renderUserListItems(images);
    smoothScroll();
    loader.hide();
    loadMoreBtn.show();
  } catch (error) {
    iziToast.warning({
      title: 'Alert',
      message: error.message,
      position: 'topRight',
    });
    loadMoreBtn.hide();
    loader.hide();
  }
}
