// 修改了配置文件需要重新启动
module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        }
    },
    lintOnSave: false, //关闭语法检查
    // 开启一个代理服务器  代理服务器和本机服务器一样

    // devServer: {
    //   // 需要请求数据的服务器地址
    //   proxy: 'http://localhost:5000'
    // }

    devServer: {
        proxy: {
            //请求前缀  '/api'
            '/api': {
                target: 'http://localhost:5000',
              // 配置PathRewrite，确保代理服务器里面的路径正确
                pathRewrite: {'^/api': ''},
                ws: true,  //用于支持websocket
                changeOrigin: true  //用于控制请求头中的host值
            },
            '/foo': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/foo': ''},
            }
        }
    }
}