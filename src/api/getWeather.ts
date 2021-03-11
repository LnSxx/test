/* eslint-disable camelcase */
import axios from 'axios';
import { getWeatherFail, getWeatherSuccess } from '../store/weather/actions';
import { Weather } from '../store/weather/types';

interface WttrResponse {
    current_condition: Array<Weather>
}

export default function getWeather() {
  return async (dispatch: any) => {
    try {
      const response = await axios.get<WttrResponse>('http://wttr.in/?format=j1');
      const locationResponse = await axios.get('http://wttr.in/?format=%22%l%22');
      if (Object.prototype.hasOwnProperty.call(response.data, 'current_condition')) {
        const weather: Weather = {
          FeelsLikeC: response.data.current_condition[0].FeelsLikeC,
          cloudcover: response.data.current_condition[0].cloudcover,
          pressure: response.data.current_condition[0].pressure,
          temp_C: response.data.current_condition[0].temp_C,
          visibility: response.data.current_condition[0].visibility,
          weatherCode: Number(response.data.current_condition[0].weatherCode),
          location: locationResponse.data,
        };
        dispatch(getWeatherSuccess(weather));
      } else {
        dispatch(getWeatherFail(String(response.data)));
      }
    } catch (error) {
      dispatch(getWeatherFail(String(error.message)));
    }
  };
}
