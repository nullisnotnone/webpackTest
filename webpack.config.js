/**
 * Created by sunchuang on 2017/9/22.
 */

module.exports = {
    entry : __dirname + '/src/script/main.js' , // 唯一的入口文件
    output : {
        path : __dirname + "/dist/js", // 打包后文件存放的地方
        filename : 'bundle.js'  // 打包后输出文件的文件名
    }
}