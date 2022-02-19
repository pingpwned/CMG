import { Action, ActionType } from '../action-types';
import { Dispatch } from 'redux';

export const setUserAddress = (userAddress: string | null) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_USER_ADDRESS,
      payload: userAddress
    })
  }
}

export const setChainId = (chainId: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_USER_NETWORK,
      payload: chainId
    })
  }
}
