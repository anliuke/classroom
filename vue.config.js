module.exports = {
    outputDir: process.env.outputDir,
    publicPath: process.env.NODE_ENV === 'development'? './': '/hybrid-ketang/',
    devServer: {
        open: true,
    },
    // css: {
    //     loaderOptions: {
    //       stylus: { //引入全局变量
    //         import: path.resolve(__dirname, './src/assets/css/mixIn.styl')
    //       },
    //     }
    // }
}
