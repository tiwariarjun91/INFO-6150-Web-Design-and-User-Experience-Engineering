const path = require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename : 'bundle.js',
    },
};