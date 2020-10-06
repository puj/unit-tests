export const chooseIconFromWeather = (weather) => {
  switch (weather) {
    case 'Clouds':
      return './assets/img_cloud.svg';
    case 'Clear':
      return './assets/img_sun.svg';
    case 'Snow':
      return './assets/img_cloud.svg';
    case 'Rain':
      return './assets/img_rain.svg';
    case 'Drizzle':
      return './assets/img_rain.svg';
    case 'Thunderstorm':
      return './assets/img_rain.svg';
    default:
      return './assets/img_unknown.svg';
  }

  // switch (weather) {
  //   case 'Clouds':
  //   case 'Snow':
  //     return './assets/img_cloud.svg';
  //   case 'Clear':
  //     return './assets/img_sun.svg';
  //   case 'Rain':
  //   case 'Drizzle':
  //   case 'Thunderstorm':
  //     return './assets/img_rain.svg';
  //   default:
  //     return './assets/img_unknown.svg';
  // }
};
