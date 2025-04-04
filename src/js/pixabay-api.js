import axios from 'axios';
//повинна прибирати клас для відображення лоадера
import { hideLoader } from './render-functions';

export default function getImagesByQuery(query) {
  return axios(query)
    .then(response => response.data)
    .catch(error => null)
    .finally(() => hideLoader());
}
