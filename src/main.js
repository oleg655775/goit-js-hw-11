import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = form.querySelector('[name="search-text"]');

form.addEventListener('submit', submitHandler);

async function submitHandler(e) {
  e.preventDefault();

  const searchInputValue = searchInput.value.trim();

  if (!searchInputValue) {
    return;
  }

  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(searchInputValue);

    if (!data.length) {
      throw new Error('No images found!');
    }

    createGallery(data);
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}
