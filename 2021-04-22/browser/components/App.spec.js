import App from './App.js';

describe('App', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({}),
    });
  });

  it('debería mostrar loading al iniciar', () => {
    const el = App();
    expect(el.children.length).toBe(1);
    expect(el.children[0].className).toBe('Loading');
  });

  it('debería mostrar error cuando fetch rechaza', (done) => {
    fetch.mockRejectedValueOnce(new Error('OMG'));
    const el = App();
    setTimeout(() => {
      expect(el.children.length).toBe(1);
      expect(el.children[0].className).toBe('ErrorMessage');
      expect(el.children[0].textContent).toBe('OMG');
      done();
    });
  });

  it('debería mostrar fotos cuando fetch resuelve ok', (done) => {
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        latest_photos: [
          {
            img_src: 'http://foo/bar.png',
          },
          {
            img_src: 'http://foo/baz.png',
          },
        ],
      }),
    });
    const el = App();
    setTimeout(() => {
      expect(el.children.length).toBe(2);
      expect(el.children[0].className).toBe('Photo');
      expect(fetch.mock.calls.length).toBe(1);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=DEMO_KEY')
      done();
    });
  });

  // Agregar pruebas para errores más granulares...
});
