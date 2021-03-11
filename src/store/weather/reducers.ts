import { FAKE_WEATHER_DATA } from '../../constants/constants';
import { WEATHER_ACTION_NAMES, WeatherActionTypes, WeatherState } from './types';

const initialState: WeatherState = {
  weatherData: {
    FeelsLikeC: null,
    cloudcover: null,
    pressure: null,
    temp_C: null,
    visibility: null,
    weatherCode: null,
    location: null,
  },
  error: '',
};

export default function weatherReducer(
  state = initialState,
  action: WeatherActionTypes,
): WeatherState {
  switch (action.type) {
    case WEATHER_ACTION_NAMES.getWeatherSuccess:
      return {
        weatherData: action.payload,
        error: '',
      };
    case WEATHER_ACTION_NAMES.getWeatherFail:
      return {
        ...state,
        error: action.payload,
      };
    case WEATHER_ACTION_NAMES.putFakeData:
      return {
        weatherData: FAKE_WEATHER_DATA,
        error: '',
      };
    default:
      return state;
  }
}
