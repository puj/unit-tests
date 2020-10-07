export const chooseIconFromWeather = (weather) => {
  switch (weather) {
    case 'Clouds':
    case 'Snow':
      return './assets/img_cloud.svg';
    case 'Clear':
      return './assets/img_sun.svg';
    case 'Rain':
    case 'Drizzle':
    case 'Thunderstorm':
      return './assets/img_rain.svg';
    default:
      return './assets/img_unknown.svg';
  }

  //   if (weather === 'Clouds') {
  //     return './assets/img_cloud.svg';
  //   } else if (weather === 'Rain') {
  //     return './assets/img_rain.svg';
  //   }

  //   return './assets/img_unknown.svg';
};
