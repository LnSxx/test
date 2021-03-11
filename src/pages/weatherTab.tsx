import React, { useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorContainer from '../components/ErrorContainer';
import getWeather from '../api/getWeather';
import { RootState } from '../store/storeTypes';
import WeatherBoard from '../components/weatherBoard/weatherBoard';

const WeatherTab: React.FC = () => {
  const error = useSelector((state: RootState) => state.weather.error);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getWeather()); }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Current Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {(error === '') ? <WeatherBoard /> : <ErrorContainer error={error} />}
      </IonContent>
    </IonPage>
  );
};

export default WeatherTab;
