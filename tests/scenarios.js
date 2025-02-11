const NONE = 'none';

const defaultValues = {
  name: 'your-app',
  appid: 'com.example.yourapp',
  appver: '0.0.1',
  description: 'An electron-nuxt project',
  cssFramework: NONE,
  cssPreprocessor: NONE,
  iconSet: NONE,
  eslint: false,
  eslintConfig: NONE,
  unit: true,
  e2e: true,
  author: 'CI user'
};

const scenarios = {
  default: defaultValues,
  eslint: {
    ...defaultValues,
    eslint: true
  },
  sass: {
    ...defaultValues,
    cssPreprocessor: 'sass'
  },
  less: {
    ...defaultValues,
    cssPreprocessor: 'less'
  },
  stylus: {
    ...defaultValues,
    cssPreprocessor: 'stylus'
  },
  vuetify: {
    ...defaultValues,
    cssFramework: 'vuetify'
  },
  buefy: {
    ...defaultValues,
    cssFramework: 'buefy'
  },
  element: {
    ...defaultValues,
    cssFramework: 'element'
  }
};


module.exports = scenarios;