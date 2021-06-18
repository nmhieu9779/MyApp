import * as testConfigApi from './testConfig.api';

const api: {[key: string]: (data: any) => {[key: string]: any}} = {
  ...testConfigApi,
};

export {api};
