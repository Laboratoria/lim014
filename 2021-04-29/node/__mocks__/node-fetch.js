module.exports = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue({
    latest_photos: [],
  }),
});
