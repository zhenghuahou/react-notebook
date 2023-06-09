/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    
    config = rewireLess.withLoaderOptions({
            javascriptEnabled: true,
    })(config, env);
    
    return config;
};