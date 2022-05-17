import { Action, ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { ethers } from 'ethers';

export const setUserAddress = (userAddress: string | null) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_ADDRESS,
    payload: userAddress,
  });
};
export const setChainId = (chainId: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_NETWORK,
    payload: chainId,
  });
};
export const setScore = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_SCORE,
  });
};
export const setGameOver = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_GAME_OVER,
  });
};
export const toggleModal = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.TOGGLE_MODAL,
  });
};

export const gameStarted = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.GAME_STARTED,
  });
};

export const setProvider =
  (provider: ethers.providers.Web3Provider) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_PROVIDER,
      payload: provider,
    });
  };

export const submitScore = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SUBMIT_SCORE,
  });
};

export const setPlayers =
  (players: Array<{ name: string; score: number }>) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_PLAYERS,
      payload: players,
    });
  };

export const setPlayerName = (name: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_PLAYER_NAME,
    payload: name,
  });
};
