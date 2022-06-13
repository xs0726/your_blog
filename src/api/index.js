import instance, { configDefault } from "./request"
import { assign, map } from "lodash"

function createRequestFunction (service) {
  return function (config) {
    return service(Object.assign(configDefault, config))
  }
}

const request = createRequestFunction(instance)
const baseURL = ''

const files = require.context("./modules", true, /\.api\.js$/)
const generators = files.keys().map(key => files(key).default)

/**
 * @desc: 用于检测是否存在同名的api，同名时抛出错误信息，避免api相互覆盖
 * @tip: 检测仅发生在运行时即需要调用$api才能触发，并仅在本地开发环境执行
 */
process.env.NODE_ENV === "development" && (() => {
  let map = {};
  let fileNames = files.keys();
  const generatorList = files.keys().map(key => files(key).default)
  const fnObjeList = generatorList.map(generator => generator(request, baseURL))
  let fns, fileName, key;
  for (let i = 0; i < fileNames.length; i++) {
    fileName = fileNames[i];
    fns = Object.keys(fnObjeList[i]);
    for (let j = 0; j < fns.length; j++) {
      key = fns[j];
      if (map[key]) {
        throw Error(
            `监测到相同的api函数名称，存在相互覆盖风险，请修改！
        文件名称是【${fileName}】，函数名称是【${key}】
        温馨提示：上述错误信息中【文件名称】为检测结果，不能作为需要修改的文件，请结合实际情况修改对应文件的api函数名称。

js详细错误信息如下：`);
      }
      map[key] = true;
    }
  }
})()

export default assign({}, ...map(generators, generator => generator({
  request,
  baseURL
})))

// 此文件作为网络请求配置的入口文件，作用是集中注册 modules 文件夹中的配置文件
// modules 内任所有的 *.api.js 文件都会被调用，每个文件应该默认导出一个方法，这个方法接收一个对象作为参数，
// service.js 会将通用的方法通过此对象传递给每一个 module
// 在 modules 文件夹内扫描 *.api.js 而不是 *.js 的好处是这样允许您在 modules 文件夹内放置某些非接口配置的 js 文件
