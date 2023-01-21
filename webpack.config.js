const path = require('path')
const assetsDir = path.resolve(__dirname, 'assets');
 
module.exports = {
    entry: assetsDir + "/src/app.tsx",
    output: {
        path: assetsDir + "/dist",
        filename: 'app.js'
    },
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: "ts-loader",
            },
        ],
    },
    resolve: {
    extensions: [".ts", ".tsx", ".js"]
    },
};
