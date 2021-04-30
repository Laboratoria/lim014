const ErrorMessage = ({ error }) => {
  const el = document.createElement('div');
  el.className = 'ErrorMessage';
  el.textContent = error.message;
  return el;
};

export default ErrorMessage;