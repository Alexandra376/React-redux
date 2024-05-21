export interface ActivityData {
  activity: string;
  id: string;
}

export interface ActivityRandomizerState {
  data: ActivityData[],
  isLoading: boolean,
  error: any
}
