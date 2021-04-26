import Loading from './Loading.js';
import ErrorMessage from './ErrorMessage.js';
import Photo from './Photo.js';

const App = () => {
  const el = document.createElement('div');
  el.className = 'App';

  el.appendChild(Loading());

  fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=DEMO_KEY')
    .then(resp => resp.json())
    .then(({ latest_photos }) => latest_photos)
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
