export const filterForecastsClosestTo = (forecasts, targetHour) => {
  return forecasts.filter((forecast) => {
    const forecastDate = new Date(forecast.dt * 1000);
    const hourDifference = Math.abs(forecastDate.getHours() - targetHour);
    return hourDifference < 2;
  });
};
