/**
 * @type {import('next-i18next').UserConfig}
 */


module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'am',
    locales: ['am', 'en', 'ru'],
    localeDetection: false,
    serializeConfig: false,
  },
  trailingSlash: true,
  localePath:
      typeof window === 'undefined'
          ? require('path').resolve('./public/locales')
          : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}












