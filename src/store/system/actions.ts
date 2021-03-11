import { SYSTEM_ACTION_NAMES } from './actionTypes';

export const enableAdvancedMode = () => ({
  type: SYSTEM_ACTION_NAMES.enableAdvancedMode,
});

export const disableAdvancedMode = () => ({
  type: SYSTEM_ACTION_NAMES.disableAdvancedMode,
});
