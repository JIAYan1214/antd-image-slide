/**
 * Created by zeyuan on 2019/1/21
 */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = function override(config, env) {
    console.log(config);
    config.externals = {
        Swiper:'Swiper'
    }
    if(env == 'production'){
        config.plugins.push(new BundleAnalyzerPlugin())
        config.devtool = false
    }
    // config = rewireLess(config, env);
    // config = injectBabelPlugin(['import',{ libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
}