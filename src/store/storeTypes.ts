import { WeatherState } from './weather/types';
import { SystemState } from './system/actionTypes';

export interface RootState {
    system: SystemState,
    weather: WeatherState
  }
