// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const htmlImage = images
    .map(
      item => `<li class="gallery-cart">
      <a href=${item.largeImageURL}>
      <img class="gallery-image" src=${item.webformatURL} alt=${item.tags}></img>
      <div class="stats">
        <span>Like</span>
        <span>Views</span>
        <span>Comments</span>
        <span>Downloads</span>
        <span>${item.likes}</span>
        <span>${item.views}</span>
        <span>${item.comments}</span>
        <span>${item.downloads}</span>
      </div>
      </a>
  </li>`
    )
    .join('');

  galleryList.innerHTML = htmlImage;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
