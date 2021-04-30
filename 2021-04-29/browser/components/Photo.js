const Photo = ({ photo }) => {
  const img = document.createElement('img');
  img.className = 'Photo';
  img.src = photo.img_src;
  return img;
};

export default Photo;