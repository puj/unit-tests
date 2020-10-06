const weatherToIconLookup = {
  Clouds: "./assets/img_cloud.svg",
  Snow: "./assets/img_cloud.svg",
  Clear: "./assets/img_sun.svg",
  Rain: "./assets/img_rain.svg",
  Drizzle: "./assets/img_rain.svg",
  Thunderstorm: "./assets/img_rain.svg",
};

export const chooseIconFromWeather = (weather) => {
  if (!(weather in weatherToIconLookup)) {
    return "./assets/img_unknown.svg";
  }

  return weatherToIconLookup[weather];

  // == ALTERNATIVE ==
  // switch (weather) {
  //   case "Clouds":
  //   case "Snow":
  //     return "./assets/img_cloud.svg";
  //   case "Clear":
  //     return "./assets/img_sun.svg";
  //   case "Rain":
  //   case "Drizzle":
  //   case "Thunderstorm":
  //     return "./assets/img_rain.svg";
  //   default:
  //     return "./assets/img_unknown.svg";
  // }

  // == ALTERNATIVE ==
  // switch (weather) {
  //   case "Clouds":
  //     return "./assets/img_cloud.svg";
  //   case "Clear":
  //     return "./assets/img_sun.svg";
  //   case "Snow":
  //     return "./assets/img_cloud.svg";
  //   case "Rain":
  //     return "./assets/img_rain.svg";
  //   case "Drizzle":
  //     return "./assets/img_rain.svg";
  //   case "Thunderstorm":
  //     return "./assets/img_rain.svg";
  //   default:
  //     return "./assets/img_unknown.svg";
  // }

  // == ALTERNATIVE ==
  // if (weather === "Clouds") {
  //   return "./assets/img_cloud.svg";
  // } else if (weather === "Rain") {
  //   return "./assets/img_rain.svg";
  //   /*
  //    * etc...
  //    */
  // } else {
  //   return "./assets/img_unknown.svg";
  // }
};
