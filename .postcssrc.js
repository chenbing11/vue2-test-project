module.exports = {
  plugins: {
    autoprefixer: {},
    //'postcss-px2rem': {
    //  remUnit: 75,
    //},
    // 'postcss-px2rem-exclude': {
    //   remUnit: 75,
    //   exclude: /node_modules|assets|login|main/gi,
    // },
    'postcss-plugin-px2rem': {
      rootValue: 75,
      unitPrecision: 4,
      propWhiteList: [],
      propBlackList: [],
      exclude: /(src)/,
      selectorBlackList: [],
      ignoreIdentifier: false,
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  }
};