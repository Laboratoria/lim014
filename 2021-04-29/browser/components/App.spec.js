import { getPhotos } from '../lib/photos.js';
import App from './App.js';

jest.mock('../lib/photos.js');

describe('App', () => {
  beforeEach(() => {
    getPhotos.mockClear();
  });

  it('debería mostrar loading al iniciar', () => {
    const el = App();
    expect(el.children.length).toBe(1);
    expect(el.children[0].className).toBe('Loading');
  });

  it('debería mostrar error cuando fetch rechaza', (done) => {
    getPhotos.mockRejectedValueOnce(new Error('OMG'));
    const el = App();
    setTimeout(() => {
      expect(el.children.length).toBe(1);
      expect(el.children[0].className).toBe('ErrorMessage');
      expect(el.children[0].textContent).toBe('OMG');
      done();
    });
  });

  it('debería mostrar fotos cuando fetch resuelve ok', (done) => {
    getPhotos.mockResolvedValue([
      {
        img_src: 'http://foo/bar.png',
      },
      {
        img_src: 'http://foo/baz.png',
      },
    ]);
    const el = App();
    setTimeout(() => {
      expect(el.children.length).toBe(2);
      expect(el.children[0].className).toBe('Photo');
      expect(getPhotos.mock.calls.length).toBe(1);
      expect(getPhotos).toHaveBeenCalledTimes(1);
      expect(getPhotos).toHaveBeenCalledWith()
      done();
    });
  });

  // Agregar pruebas para errores más granulares...
});
