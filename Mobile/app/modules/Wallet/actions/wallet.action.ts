import {createAction} from '@reduxjs/toolkit';
import {WalletDto} from '../dto';

export enum WalletAction {
  GetWalletsRequest = 'WALLET/GET_WALLETS_REQUEST',
  GetWalletsSuccess = 'WALLET/GET_WALLETS_SUCCESS',
  GetWalletsError = 'WALLET/GET_WALLETS_ERROR',

  CreateWalletRequest = 'WALLET/CREATE_WALLET_REQUEST',
  CreateWalletSuccess = 'WALLET/CREATE_WALLET_SUCCESS',
  CreateWalletError = 'WALLET/CREATE_WALLET_ERROR',
}

const getWalletsRequest = createAction(WalletAction.GetWalletsRequest);
const getWalletsSuccess = createAction<WalletDto[]>(
  WalletAction.GetWalletsSuccess,
);
const getWalletsError = createAction(WalletAction.GetWalletsError);

const createWalletRequest = createAction<WalletDto>(
  WalletAction.CreateWalletRequest,
);
const createWalletSuccess = createAction<WalletDto>(
  WalletAction.CreateWalletSuccess,
);
const createWalletError = createAction(WalletAction.CreateWalletError);

export {
  getWalletsRequest,
  getWalletsSuccess,
  getWalletsError,
  createWalletRequest,
  createWalletSuccess,
  createWalletError,
};
