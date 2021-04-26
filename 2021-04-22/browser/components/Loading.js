const Loading = () => {
  const el = document.createElement('div');
  el.className = 'Loading';
  el.textContent = 'Loading...';
  return el;
};

export default Loading;