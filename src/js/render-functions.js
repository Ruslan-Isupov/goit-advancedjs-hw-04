import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function renderUserListItems(images) {
  const markup = images.hits
    .map(
      image => `
<li class="photo-card">
<a class="gallery__item"  href="${image.largeImageURL}" >
  <img src="${image.webformatURL}" alt="${image.tags}"  />
  </a>
  <div class="info">
  
  <p class="info-item">Likes
  <b>${image.likes}</b>
</p>
<p class="info-item">Views
  <b>${image.views}</b>
</p>
<p class="info-item">Comments
  <b>${image.comments}</b>
</p>
<p class="info-item">Downloads
  <b>${image.downloads}</b>
</p>
  </div>
</li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  new SimpleLightbox('.gallery a').refresh();
}

function clearMarkup() {
  gallery.innerHTML = '';
}

export { renderUserListItems, clearMarkup };
