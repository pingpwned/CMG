import { Action, ActionType } from '../action-types';

interface State {
  userAddress: string | null;
  chainId: string | null;
  gameOver: boolean;
  score: number;
  openProviderModal: boolean;
  submitScore: boolean;
  name: string;
}

export const initialState: State = {
  userAddress: null,
  chainId: null,
  gameOver: false,
  score: 0,
  openProviderModal: false,
  submitScore: false,
  name: '',
};

export const connectionReducer = (action: Action, state: State = initialState) => {
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
    case ActionType.SET_PLAYERS: {
      const leaders: Array<{ name: string; score: number }> = [];
      action.payload.forEach((player: any) => {
        leaders.push({
          name: player[0],
          /* eslint no-underscore-dangle: ["error", { "allow": ["_hex"] }] */
          score: parseInt(player[1]._hex, 10),
        });
      });

      leaders.sort((a, b) => a.score > b.score ? -1 : 1);

      return { ...state, players: leaders };
    }
    case ActionType.SET_PLAYER_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
