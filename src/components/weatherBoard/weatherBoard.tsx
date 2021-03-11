import React, { useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { RefresherEventDetail } from '@ionic/core';
import { RootState } from '../../store/storeTypes';
import { WEATHER_SYMBOL, WWO_CODE } from '../../constants/constants';
import WaitingContainer from '../WaitingContainer';
import AdvancedWeatherBoard from '../advancedWeatherBoard/advancedWeatherBoard';
import getWeather from '../../api/getWeather';

const WeatherBoard: React.FC = () => {
  const [event, setEvent] = useState < CustomEvent<RefresherEventDetail> | null>(null);
  const weatherData = useSelector((state: RootState) => state.weather.weatherData);
  const dispatch = useDispatch();
  if (weatherData.weatherCode === null) {
    return <WaitingContainer />;
  }
  if (event !== null) {
    event.detail.complete();
  }
  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    dispatch(getWeather());
    setEvent(event);
  }
  const currentWeatherWWOCode = WWO_CODE.get(weatherData.weatherCode) || 'Unknown';
  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent />
      </IonRefresher>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {weatherData.location}
          </IonCardTitle>
          <IonCardSubtitle>
            Your location
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {(weatherData.weatherCode === null)
              ? WEATHER_SYMBOL.get('Unknown')
              : WEATHER_SYMBOL.get(currentWeatherWWOCode)}
          </IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {`${weatherData.temp_C} °C`}
          </IonCardTitle>
          <IonCardSubtitle>
            Temperature (real)
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {`${weatherData.FeelsLikeC} °C`}
          </IonCardTitle>
          <IonCardSubtitle>
            Temperature (feels like)
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
      <AdvancedWeatherBoard />
    </>
  );
};

export default WeatherBoard;
