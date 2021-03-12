/* eslint-disable camelcase */
import axios from 'axios';
import { Dispatch } from 'redux';
import { WEATHER_LOCATION_RESPONSE_URL, WEATHER_RESPONSE_URL } from '../settings';
import { getWeatherFail, getWeatherSuccess } from '../store/weather/actions';
import { Weather } from '../store/weather/types';

interface WttrResponse {
    current_condition: Array<Weather>
}

export default function getWeather() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<WttrResponse>(WEATHER_RESPONSE_URL);
      const locationResponse = await axios.get(WEATHER_LOCATION_RESPONSE_URL);
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
