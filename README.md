<!--
 * @Description: file content
 * @Author: 琚志强 1020814597
 * @Date: 2021-04-27 16:33:36
 * @LastEditors: 琚志强
 * @LastEditTime: 2021-04-27 18:33:28
-->
# 在开发模式下运行
首先进入项目文件, 
## 运行 `npm start`

在浏览器打开 [http://localhost:3000](http://localhost:3000) 

进行编辑，页面将重新加载。您还将在控制台中看到任何lint错误。

## 运行 `npm test`

## 运行 `npm run build` 进行项目打包

将应用程序构建到“build”文件夹中。它将在生产模式中使用React，并优化构建以获得最佳性能。

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 运行 `npm run eject` 

**注意: 单向操作. 运行 `eject`后, 不可逆!**
打开react 默认配置的webpack隐藏文件，在里面你可以自由进行你自己的webpack配置

## 运行 `npm run json-server` 
将启动本地数据模拟，请遵循 **Restful** 接口规范使用，可在`__json_server_mock__/db.json`配置初始数据
`
{
    <!-- 类似一张表  get: localhost:xxx/users 即可查询-->
    "users":[]
}
`


