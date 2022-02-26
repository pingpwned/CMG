import { ethers, providers } from 'ethers';

export enum ActionType {
  SET_ADDRESS = 'SET_ADDRESS',
  SET_NETWORK = 'SET_NETWORK',
  SET_GAME_OVER = 'SET_GAME_OVER',
  SET_SCORE = 'SET_SCORE',
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  GAME_STARTED = 'GAME_STARTED',
  SET_PROVIDER = 'SET_PROVIDER',
  SUBMIT_SCORE = 'SUBMIT_SCORE',
  SET_PLAYERS = 'SET_PLAYERS',
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
}
interface SetScore {
  type: ActionType.SET_SCORE;
}
interface ToggleModal {
  type: ActionType.TOGGLE_MODAL;
}
interface GameStarted {
  type: ActionType.GAME_STARTED;
}
interface SetProvider {
  type: ActionType.SET_PROVIDER;
  payload: ethers.providers.Web3Provider;
}
interface SubmitScore {
  type: ActionType.SUBMIT_SCORE;
}
interface SetPlayers {
  type: ActionType.SET_PLAYERS;
  payload: Array<{ id: number; score: number }>;
}

export type Action =
  | SetAddress
  | SetChainId
  | SetGameOver
  | SetScore
  | ToggleModal
  | GameStarted
  | SetProvider
  | SubmitScore
  | SetPlayers;
