import I18n from 'i18next';

import {LocaleNamespace} from 'app/constants/localeNamespace';
import {initReactI18next} from 'react-i18next';
import {store} from 'app/store';

const resources = {
  vi: {
    [LocaleNamespace.TEST_CONFIG]: require('../../assets/localization/vn/test-config.json'),
    [LocaleNamespace.DEFAULT]: require('../../assets/localization/vn/default.json'),
    [LocaleNamespace.WALLET]: require('../../assets/localization/vn/wallet.json'),
  },
  en: {
    [LocaleNamespace.DEFAULT]: require('../../assets/localization/en/default.json'),
    [LocaleNamespace.WALLET]: require('../../assets/localization/en/wallet.json'),
  },
} as const;

const lng = store.getState().appDataState.appLanguage;

I18n.use(initReactI18next).init({
  resources,
  lng,
  defaultNS: LocaleNamespace.DEFAULT,
});

export default I18n;
