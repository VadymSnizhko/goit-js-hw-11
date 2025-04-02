import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

/*
//для виконання HTTP-запитів
import getImagesByQuery from './js/pixabay-api';
//створювати HTML-розмітку для галереї
import createGallery from './js/render-functions';
//повинна очищати вміст контейнера галереї
import clearGallery from './js/render-functions';
//повинна додавати клас для відображення лоадера
import showLoader from './js/render-functions';
//повинна прибирати клас для відображення лоадера
import hideLoader from './js/render-functions';
*/
const form = document.querySelector('.form');
const btnSearch = document.querySelector('button');
const inputForm = document.querySelector('input');
const userList = document.querySelector('.user-list');

const API_KEY = '49637256-cb46921c72200043e40baf2ce';

console.log(inputForm);
form.addEventListener('submit', clickSearch);

function clickSearch(event) {
  event.preventDefault();
}
