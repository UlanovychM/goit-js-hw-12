'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const spinner = document.querySelector('.loader');
const fetchBtn = document.querySelector('.loadBtn');

let page = 1;
let limit = 15;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const paramsAPI = {
  key: '42045393-d503a5a54b8da83761f9aabf4',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: page,
  per_page: limit,
};

function renderGalleryImg(arr) {
  const markup = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source=""
      alt="${tags}"
    />
		
  </a>
  <ul class="image-info">
    <li class="info-item">
    <p>Likes</p>
    ${likes}
    </li>
    <li class="info-item"><p>Views</p>
    ${views}
    </li>
    <li class="info-item">
    <p>Comments</p>
    ${comments}
    </li>
    <li class="info-item"><p>Downloads</p>
    ${downloads}
    </li>
  </ul> 
	
</li>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  document.querySelector('.gallery-link').addEventListener('click', e => {
    e.preventDefault();
  });

  lightbox.refresh();
}

function getFormValueStr(str) {
  paramsAPI.q = str.replace(/\\s+/g, '+');

  fetchImages()
    .then(img => {
      spinnerToggleShow();

      fetchBtn.style.display = 'block';

      if (img.hits.length !== 0) {
        renderGalleryImg(img.hits);
      } else {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        fetchBtn.style.display = 'none';
      }
    })
    .catch(error => console.log('Error:', error));
}

fetchBtn.addEventListener('click', async () => {
  spinnerToggleShow();

  page += 1;
  paramsAPI.page = page;

  await fetchImages()
    .then(img => {
      spinnerToggleShow();
      renderGalleryImg(img.hits);
      if (img.totalHits < 500) {
        fetchBtn.style.display = 'none';
        return iziToast.info({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
      window.scrollBy({
        left: 0,
        top: 515,
        behavior: 'smooth',
      });
    })
    .catch(error => console.log('Error:', error));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  fetchBtn.style.display = 'none';

  if (e.target.elements.search.value !== '') {
    spinnerToggleShow();

    getFormValueStr(e.target.elements.search.value);
  }
  clearSearchElements();
});

async function fetchImages() {
  const searchParams = new URLSearchParams(paramsAPI);
  const response = await axios.get(`https://pixabay.com/api?${searchParams}`);

  return response.data;
}

function spinnerToggleShow() {
  spinner.classList.toggle('loader_show');
}

function clearSearchElements() {
  gallery.innerHTML = '';
  page = 1;
}
