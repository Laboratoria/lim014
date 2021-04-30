import Loading from './Loading.js';
import ErrorMessage from './ErrorMessage.js';
import Photo from './Photo.js';
import { getPhotos } from '../lib/photos.js';

const App = () => {
  const el = document.createElement('div');
  el.className = 'App';

  el.appendChild(Loading());

  getPhotos()
    .then((photos) => {
      el.innerHTML = '';
      photos.forEach((photo) => {
        el.appendChild(Photo({ photo }));
      });
    })
    .catch((error) => {
      el.innerHTML = '';
      el.appendChild(ErrorMessage({ error }));
    });

  return el;
};

export default App;
