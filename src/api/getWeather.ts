/* eslint-disable camelcase */
import axios from 'axios';
import { HTTP } from '@ionic-native/http/ngx';
import { getWeatherFail, getWeatherSuccess } from '../store/weather/actions';
import { Weather } from '../store/weather/types';

interface WttrResponse {
    current_condition: Array<Weather>
}

export default function getWeather() {
  const http = new HTTP();
  return async (dispatch: any) => {
    try {
      const weatherResponse = await http.get('http://wttr.in/?format=j1', {}, {});
      const locationResponse = await http.get('http://wttr.in/?format=%22%l%22', {}, {});
      const weatherResponseData = JSON.parse(weatherResponse.data);
      const locationResponseData = JSON.parse(locationResponse.data);
      if (Object.prototype.hasOwnProperty.call(weatherResponseData, 'current_condition')) {
        const weather: Weather = {
          FeelsLikeC: weatherResponseData.current_condition[0].FeelsLikeC,
          cloudcover: weatherResponseData.current_condition[0].cloudcover,
          pressure: weatherResponseData.current_condition[0].pressure,
          temp_C: weatherResponseData.current_condition[0].temp_C,
          visibility: weatherResponseData.current_condition[0].visibility,
          weatherCode: Number(weatherResponseData.current_condition[0].weatherCode),
          location: locationResponseData,
        };
        dispatch(getWeatherSuccess(weather));
      } else {
        dispatch(getWeatherFail(String(weatherResponseData)));
      }
    } catch (error) {
      dispatch(getWeatherFail(String(JSON.stringify(error.error))));
    }
  };
}
