import * as testConfigApi from './testConfig.api';
import {api as walletApi} from './wallet.api';

const api: {[key: string]: (data: any) => {[key: string]: any}} = {
  ...testConfigApi,
  ...walletApi,
};

export {api};
