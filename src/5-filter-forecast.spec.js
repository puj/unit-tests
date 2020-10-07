import { filterForecastsClosestTo } from './5-filter-forecast';
import data from './5-filter-forecast-data.json';
const forecastArray = data.list;

describe('5-filter-forecast-days', () => {
  it('should return an array of 5 forecasts where the hour is close to 15:00', () => {
    const targetHour = 15;
    const filteredForecasts = filterForecastsClosestTo(
      forecastArray,
      targetHour
    );

    filteredForecasts.forEach((forecast) => {
      const forecastDate = new Date(forecast.dt * 1000);
      const hour = forecastDate.getHours();
      const hourDiff = hour - targetHour;

      // [CHECK] Our test:
      // for targetHour == 15, we will accept 14, 15, 16
      // Since we know the forecasts are three hours apart, this should cover all  possibilities
      expect(hourDiff).toBeLessThan(2);
    });

    // One forecast per day
    expect(filteredForecasts.length).toEqual(5);
  });
});
