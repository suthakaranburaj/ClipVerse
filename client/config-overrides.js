const path = require('path');
module.exports = function override(config) {
    config.output.path = path.resolve(__dirname, 'dist');
    return config;
};
