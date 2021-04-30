const fetch = require('node-fetch');
const { getPhotos } = require('.');

jest.mock('node-fetch');

describe('getPhotos', () => {
  it('debería rechazar cuando fetch rechaza', () => {
    fetch.mockRejectedValue(new Error('OMG'));
    return expect(getPhotos()).rejects.toThrow('OMG');
  });

  it('debería resolver con fotos cuando fetch resuelve ok', () => {
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
    return getPhotos()
      .then((photos) => {
        // console.log(photos);
        expect(Array.isArray(photos)).toBe(true);
      });
  });
});