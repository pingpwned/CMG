import { Action, ActionType } from '../action-types';

interface State {
  userAddress: string | null;
  chainId: string | null;
}

export const initialState: State = {
  userAddress: null,
  chainId: null
}

export const connectionReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER_ADDRESS:
      return {...state, userAddress: action.payload};
    case ActionType.SET_USER_NETWORK:
      return {...state, chainId: action.payload};
    default:
      return state;
  }
}
