export enum SYSTEM_ACTION_NAMES {
    enableAdvancedMode = 'enableAdvancedMode',
    disableAdvancedMode = 'disableAdvancedMode',
    enableDarkMode = 'enableDarkMode',
    disableDarkMode = 'disableDarkMode',
}

export interface SystemState {
  advancedMode: boolean
}

interface enableAdvancedMode {
    type: SYSTEM_ACTION_NAMES.enableAdvancedMode
  }

interface disableAdvancedMode {
    type: SYSTEM_ACTION_NAMES.disableAdvancedMode
  }

export type AdvancedModeActionTypes = enableAdvancedMode | disableAdvancedMode
