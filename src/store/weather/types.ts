/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { WWO_CODE } from '../../constants/constants';

export enum WEATHER_ACTION_NAMES {
    getWeatherSuccess = 'getWeatherSuccess',
    getWeatherFail = 'getWeatherFail',
    putFakeData = 'putFakeData',
}

export interface Weather {
    FeelsLikeC: number | null
    cloudcover: number | null
    pressure: number | null
    temp_C: number | null
    visibility: number | null
    weatherCode: number | null
    location: string | null
  }

export interface WeatherState {
    weatherData: Weather
    error: string
  }

interface getWeatherSuccess {
    type: WEATHER_ACTION_NAMES.getWeatherSuccess
    payload: Weather
  }

interface getWeatherFail {
    type: WEATHER_ACTION_NAMES.getWeatherFail
    payload: string
  }

interface putFakeData {
  type: WEATHER_ACTION_NAMES.putFakeData
}

export type WeatherActionTypes = getWeatherSuccess | getWeatherFail | putFakeData
