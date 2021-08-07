import DeviceInfo from 'react-native-device-info';
import i18n from 'i18n-js';
import en from './en';
import ru from './ru';
import uk from './uk';

i18n.defaultLocale = 'en';
//i18n.locale = 'en';
i18n.locale = DeviceInfo.toLocaleString();
i18n.fallbacks = true;
i18n.translations = { en, ru, uk };

export default i18n;
