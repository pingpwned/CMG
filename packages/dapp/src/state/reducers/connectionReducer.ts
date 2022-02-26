import { Action, ActionType } from '../action-types';

interface State {
  userAddress: string | null;
  chainId: string | null;
  gameOver: boolean;
  score: number;
  openProviderModal: boolean;
  submitScore: boolean;
}

export const initialState: State = {
  userAddress: null,
  chainId: null,
  gameOver: false,
  score: 0,
  openProviderModal: false,
  submitScore: false,
};

export const connectionReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ADDRESS:
      return { ...state, userAddress: action.payload };
    case ActionType.SET_NETWORK:
      return { ...state, chainId: action.payload };
    case ActionType.SET_GAME_OVER:
      return { ...state, gameOver: true };
    case ActionType.SET_SCORE:
      return { ...state, score: state.score + 10 };
    case ActionType.TOGGLE_MODAL:
      return { ...state, openProviderModal: !state.openProviderModal };
    case ActionType.GAME_STARTED:
      return { ...state, gameStarted: true };
    case ActionType.SET_PROVIDER:
      return { ...state, provider: action.payload };
    case ActionType.SUBMIT_SCORE:
      return { ...state, submitScore: !state.submitScore };
    case ActionType.SET_PLAYERS:
      const leaders: Array<{ id: number; score: number }> = [];
      action.payload.forEach((player: any) => {
        leaders.push({
          id: parseInt(player[0]._hex),
          score: parseInt(player[1]._hex),
        });
      });

      leaders.sort((a, b) => {
        if (a.score > b.score) {
          return -1;
        } else {
          return 1;
        }
      });
      return { ...state, players: leaders };
    default:
      return state;
  }
};
