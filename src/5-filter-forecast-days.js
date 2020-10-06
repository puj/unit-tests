export const filterForecastsClosestTo = (forecasts, targetHour) => {
  return forecasts.filter((forecast) => {
    const forecastDate = new Date(forecast.dt * 1000);
    const hourDifference = Math.abs(forecastDate.getHours() - targetHour);
    return hourDifference < 2;
  });

  // == SHORTER ==
  // but unreadable
  //
  // return forecasts.filter(
  //   (forecast) =>
  //     Math.abs(new Date(forecast.dt * 1000).getHours() - targetHour) < 2
  // );
};
