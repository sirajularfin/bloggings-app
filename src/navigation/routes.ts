export enum NavigationScreen {
  SAMPLE = 'SAMPLE',
  HOME = 'HOME',
  REGISTRATION = 'REGISTRATION',
  ONBOARDING = 'ONBOARDING',
  LOGIN = 'LOGIN',
}

export type RootStackParamList = {
  [NavigationScreen.SAMPLE]: undefined;
  [NavigationScreen.HOME]: undefined;
  [NavigationScreen.REGISTRATION]: undefined;
  [NavigationScreen.ONBOARDING]: undefined;
  [NavigationScreen.LOGIN]: undefined;
};
