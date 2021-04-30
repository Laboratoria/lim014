export const getPhotos = () => fetch(
  'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=DEMO_KEY',
)
  .then(resp => resp.json())
  .then(({ latest_photos }) => latest_photos);
