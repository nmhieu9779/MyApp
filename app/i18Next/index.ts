import I18n from 'i18next';

import {LocaleNamespace} from 'app/constants/localeNamespace';
import {initReactI18next} from 'react-i18next';

const resources = {
  vi: {
    [LocaleNamespace.TEST_CONFIG]: require('../../assets/localization/vn/test-config.json'),
    [LocaleNamespace.DEFAULT]: require('../../assets/localization/vn/default.json'),
    [LocaleNamespace.WALLET]: require('../../assets/localization/vn/wallet.json'),
  },
  en: {
    [LocaleNamespace.DEFAULT]: require('../../assets/localization/vn/default.json'),
    [LocaleNamespace.WALLET]: require('../../assets/localization/vn/wallet.json'),
  },
} as const;

I18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  defaultNS: LocaleNamespace.DEFAULT,
});

export default I18n;
