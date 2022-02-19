export enum ActionType {
  SET_USER_ADDRESS = "SET_USER_ADDRESS",
  SET_USER_NETWORK = "SET_USER_NETWORK",
}

interface SetAddressAction {
  type: ActionType.SET_USER_ADDRESS;
  payload: string | null;
}

interface SetChainId {
  type: ActionType.SET_USER_NETWORK;
  payload: string;
}

export type Action = SetAddressAction | SetChainId;
