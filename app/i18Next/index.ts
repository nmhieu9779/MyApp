import I18n from 'i18next';

import {LocaleNamespace} from 'app/constants/localeNamespace';
import {initReactI18next} from 'react-i18next';

const resources = {
  vi: {
    [LocaleNamespace.TEST_CONFIG]: require('../../assets/localization/vn/test-config.json'),
  },
  en: {},
} as const;

I18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
});

export default I18n;
