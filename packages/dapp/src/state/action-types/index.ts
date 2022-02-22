export enum ActionType {
  SET_ADDRESS = "SET_ADDRESS",
  SET_NETWORK = "SET_NETWORK",
  SET_GAME_OVER = "SET_GAME_OVER",
  SET_SCORE = "SET_SCORE",
  OPEN_PROVIDER_MODAL = "OPEN_PROVIDER_MODAL",
}
interface SetAddress {
  type: ActionType.SET_ADDRESS;
  payload: string | null;
}
interface SetChainId {
  type: ActionType.SET_NETWORK;
  payload: string;
}
interface SetGameOver {
  type: ActionType.SET_GAME_OVER;
  payload: boolean;
}
interface SetScore {
  type: ActionType.SET_SCORE;
}
interface OpenProviderModal {
  type: ActionType.OPEN_PROVIDER_MODAL;
}

export type Action = SetAddress | SetChainId | SetGameOver | SetScore | OpenProviderModal;
