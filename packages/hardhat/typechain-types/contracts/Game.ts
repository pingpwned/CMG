/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../common';

export declare namespace Game {
  export type PlayerStruct = { name: string; score: BigNumberish };

  export type PlayerStructOutput = [string, BigNumber] & {
    name: string;
    score: BigNumber;
  };
}

export interface GameInterface extends utils.Interface {
  functions: {
    'addressList(address)': FunctionFragment;
    'getAll()': FunctionFragment;
    'initialize(address)': FunctionFragment;
    'nameList(uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'players(uint256)': FunctionFragment;
    'proxiableUUID()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'start(string)': FunctionFragment;
    'submitScore(uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'upgradeTo(address)': FunctionFragment;
    'upgradeToAndCall(address,bytes)': FunctionFragment;
    'userScore(string)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addressList'
      | 'getAll'
      | 'initialize'
      | 'nameList'
      | 'owner'
      | 'players'
      | 'proxiableUUID'
      | 'renounceOwnership'
      | 'start'
      | 'submitScore'
      | 'transferOwnership'
      | 'upgradeTo'
      | 'upgradeToAndCall'
      | 'userScore',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'addressList', values: [string]): string;
  encodeFunctionData(functionFragment: 'getAll', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string]): string;
  encodeFunctionData(functionFragment: 'nameList', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'players', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'proxiableUUID', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'start', values: [string]): string;
  encodeFunctionData(functionFragment: 'submitScore', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'upgradeTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'upgradeToAndCall', values: [string, BytesLike]): string;
  encodeFunctionData(functionFragment: 'userScore', values: [string]): string;

  decodeFunctionResult(functionFragment: 'addressList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nameList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'players', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxiableUUID', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'start', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'submitScore', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeToAndCall', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userScore', data: BytesLike): Result;

  events: {
    'AdminChanged(address,address)': EventFragment;
    'BeaconUpgraded(address)': EventFragment;
    'GameStarted(bool)': EventFragment;
    'Initialized(uint8)': EventFragment;
    'NewScore(tuple[])': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Upgraded(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'BeaconUpgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GameStarted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'NewScore'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[string, string], AdminChangedEventObject>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[string], BeaconUpgradedEventObject>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface GameStartedEventObject {
  start: boolean;
}
export type GameStartedEvent = TypedEvent<[boolean], GameStartedEventObject>;

export type GameStartedEventFilter = TypedEventFilter<GameStartedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface NewScoreEventObject {
  players: Game.PlayerStructOutput[];
}
export type NewScoreEvent = TypedEvent<[Game.PlayerStructOutput[]], NewScoreEventObject>;

export type NewScoreEventFilter = TypedEventFilter<NewScoreEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface Game extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GameInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addressList(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getAll(overrides?: CallOverrides): Promise<[Game.PlayerStructOutput[]]>;

    initialize(
      _box: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    nameList(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    players(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string, BigNumber] & { name: string; score: BigNumber }>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    start(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    submitScore(
      _score: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userScore(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addressList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  getAll(overrides?: CallOverrides): Promise<Game.PlayerStructOutput[]>;

  initialize(
    _box: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  nameList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  players(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[string, BigNumber] & { name: string; score: BigNumber }>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  start(
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  submitScore(
    _score: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  userScore(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addressList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAll(overrides?: CallOverrides): Promise<Game.PlayerStructOutput[]>;

    initialize(_box: string, overrides?: CallOverrides): Promise<void>;

    nameList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    players(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string, BigNumber] & { name: string; score: BigNumber }>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    start(_name: string, overrides?: CallOverrides): Promise<void>;

    submitScore(_score: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    userScore(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'AdminChanged(address,address)'(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
    AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;

    'BeaconUpgraded(address)'(beacon?: string | null): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    'GameStarted(bool)'(start?: null): GameStartedEventFilter;
    GameStarted(start?: null): GameStartedEventFilter;

    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'NewScore(tuple[])'(players?: null): NewScoreEventFilter;
    NewScore(players?: null): NewScoreEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;

    'Upgraded(address)'(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    addressList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAll(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _box: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    nameList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    players(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    start(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    submitScore(
      _score: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    userScore(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addressList(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _box: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    nameList(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    players(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    start(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    submitScore(
      _score: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    userScore(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}