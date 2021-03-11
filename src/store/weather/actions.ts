import { Weather, WEATHER_ACTION_NAMES } from './types';

export const getWeatherFail = (error: string) => ({
  type: WEATHER_ACTION_NAMES.getWeatherFail,
  payload: error,
});
export const getWeatherSuccess = (data: Weather) => ({
  type: WEATHER_ACTION_NAMES.getWeatherSuccess,
  payload: data,
});

export const putFakeData = () => ({
  type: WEATHER_ACTION_NAMES.putFakeData,
});
