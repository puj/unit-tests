// forecasts - a full list of 5 day forecasts every three hour
// targetHour - we want to return 1 forecast from each day at the closest hour to this one

// e.g. if targetHour = 15, if our forecasts are at 13:00 and 16:00
//            we want to return the 16:00

export const filterForecastsClosestTo = (forecasts, targetHour) => {
  const filteredForecasts = forecasts.filter((forecast) => {
    const forecastDate = new Date(forecast.dt * 1000);
    const hourDifference = Math.abs(forecastDate.getHours() - targetHour);
    return hourDifference < 2;
  });
  return filteredForecasts;
};
