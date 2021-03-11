import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/storeTypes';

const AdvancedWeatherBoard: React.FC = () => {
  const weatherData = useSelector((state: RootState) => state.weather.weatherData);
  const advancedMode = useSelector((state: RootState) => state.system.advancedMode);
  if (advancedMode === false) {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>
            Advanced mode is disabled. You can enable it in the tab `Options`
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    );
  }
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {`${weatherData.cloudcover} %`}
          </IonCardTitle>
          <IonCardSubtitle>
            Cloud Cover
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {`${weatherData.pressure} hPa`}
          </IonCardTitle>
          <IonCardSubtitle>
            Pressure
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {`${weatherData.visibility} km`}
          </IonCardTitle>
          <IonCardSubtitle>
            Visibility
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </>
  );
};

export default AdvancedWeatherBoard;
