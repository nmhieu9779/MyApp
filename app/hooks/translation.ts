import {TFunction} from 'i18next';
import {Namespace, useTranslation, UseTranslationOptions} from 'react-i18next';

const useAppTranslation = (
  ns?: Namespace,
  options?: UseTranslationOptions,
): TFunction => {
  const {t} = useTranslation(ns, options);

  return t;
};

export {useAppTranslation};
