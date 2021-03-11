import './container.css';
import React, { useState } from 'react';
import { IonButton } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { HTTP } from '@ionic-native/http/ngx';
import getWeather from '../api/getWeather';
import { putFakeData } from '../store/weather/actions';

interface ContainerProps {
  error: string;
}

const ErrorContainer: React.FC<ContainerProps> = ({ error }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div>
        Weather unavailable
      </div>
      <strong>{error}</strong>
      <p>
        <IonButton onClick={() => { dispatch(getWeather()); }}>Retry</IonButton>
        <IonButton onClick={() => { dispatch(putFakeData()); }}>Use fake data</IonButton>
      </p>
    </div>
  );
};

export default ErrorContainer;
