/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { SYSTEM_ACTION_NAMES, AdvancedModeActionTypes, SystemState } from './actionTypes';

const initialState: SystemState = {
  advancedMode: false,
};

export default function systemReducer(
  state = initialState,
  action: AdvancedModeActionTypes,
): SystemState {
  switch (action.type) {
    case SYSTEM_ACTION_NAMES.enableAdvancedMode:
      return {
        ...state,
        advancedMode: true,
      };
    case SYSTEM_ACTION_NAMES.disableAdvancedMode:
      return {
        ...state,
        advancedMode: false,
      };
    default:
      return state;
  }
}
