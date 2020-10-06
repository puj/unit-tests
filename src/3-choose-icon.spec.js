import { chooseIconFromWeather } from './3-choose-icon';

const cloudImgPath = './assets/img_cloud.svg';
const sunImgPath = './assets/img_sun.svg';
const rainImgPath = './assets/img_rain.svg';
const unknownImgPath = './assets/img_unknown.svg';

describe('3-choose-icon', () => {
  it('should return a cloudy image for Clouds', () => {
    expect(chooseIconFromWeather('Clouds')).toBe(cloudImgPath);
  });
  it('should return a rainy image for Rain', () => {
    expect(chooseIconFromWeather('Rain')).toBe(rainImgPath);
  });
  it('should return a sunny image for Sun', () => {
    expect(chooseIconFromWeather('Clear')).toBe(sunImgPath);
  });
  it('should return a sunny image for Snow', () => {
    expect(chooseIconFromWeather('Snow')).toBe(cloudImgPath);
  });
  it('should return a sunny image for Drizzle', () => {
    expect(chooseIconFromWeather('Drizzle')).toBe(rainImgPath);
  });
  it('should return a sunny image for Thunderstorm', () => {
    expect(chooseIconFromWeather('Thunderstorm')).toBe(rainImgPath);
  });
  it('should return a unknown image for Hail', () => {
    expect(chooseIconFromWeather('Hail')).toBe(unknownImgPath);
  });
});
