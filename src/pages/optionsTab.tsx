import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import './optionsTab.css';
import { moon, albumsOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/storeTypes';
import { disableAdvancedMode, enableAdvancedMode } from '../store/system/actions';

const OptionsTab: React.FC = () => {
  const advancedMode = useSelector((state: RootState) => state.system.advancedMode);
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle('dark');
  };
  const dispatch = useDispatch();
  const enableAdvancedModeHandler = () => {
    dispatch(enableAdvancedMode());
  };
  const disableAdvancedModeHandler = () => {
    dispatch(disableAdvancedMode());
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Options
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Weather App
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            App shows you a current weather in your location
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Settings
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonIcon
                slot="start"
                icon={moon}
                className="component-icon component-icon-dark"
              />
              <IonLabel>Dark Mode</IonLabel>
              <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
            </IonItem>
            <IonItem>
              <IonIcon
                slot="start"
                icon={albumsOutline}
                className="component-icon component-icon-dark"
              />
              <IonLabel>Advanced Mode</IonLabel>
              <IonToggle
                slot="end"
                name="advancedMode"
                onIonChange={(advancedMode)
                  ? disableAdvancedModeHandler
                  : enableAdvancedModeHandler}
              />
            </IonItem>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default OptionsTab;
