import { Action, ActionType } from '../action-types';

interface State {
  userAddress: string | null;
  chainId: string | null;
  gameOver: boolean;
  score: number;
  openProviderModal: boolean;
}

export const initialState: State = {
  userAddress: null,
  chainId: null,
  gameOver: false,
  score: 0,
  openProviderModal: false,
}

export const connectionReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ADDRESS:
      return {...state, userAddress: action.payload};
    case ActionType.SET_NETWORK:
      return {...state, chainId: action.payload};
    case ActionType.SET_GAME_OVER:
      return {...state, gameOver: action.payload};
    case ActionType.SET_SCORE:
      return {...state, score: state.score+10};
    case ActionType.OPEN_PROVIDER_MODAL:
      return {...state, openProviderModal: !state.openProviderModal};
    default:
      return state;
  }
}
