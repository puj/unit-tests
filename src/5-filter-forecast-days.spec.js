import { filterForecastsClosestTo } from './5-filter-forecast-days';
import data from './5-filter-forecast-data.json';

const forecastArray = data.list;
console.log(`Loaded ${forecastArray.length} forecasts...`);

describe('3-filter-forecast-days', () => {
  it('should return an array of 4-5 forecasts where the hour is close to 15:00', () => {
    // [METHOD UNDER TEST] Filter the forecasts
    const filteredForecasts = filterForecastsClosestTo(forecastArray, 15);

    filteredForecasts.forEach((forecast) => {
      const forecastDate = new Date(forecast.dt * 1000);
      const hour = forecastDate.getHours();

      // [CHECK] Our test:
      //  for 15, we will accept 14, 15, 16
      //  Since we know our forecast are three hours apart, this should cover all cases
      expect(Math.abs(hour - 15)).toBeLessThan(2);
    });

    // [DEBUG]
    console.log(
      `Filtered Forcasts: 
      ${filteredForecasts.map((forecast) =>
        new Date(forecast.dt * 1000).toLocaleTimeString()
      )}
      `
    );

    // [CHECK] Expect the length to be zero
    expect(filteredForecasts.length).toEqual(5);
  });
});
