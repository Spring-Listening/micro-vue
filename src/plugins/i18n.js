/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-24 16:27:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-30 10:46:12
 */
export default {
  install: (app, options) => {
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = (key) =>
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      key.split('.').reduce((o, i) => {
        if (o) return o[i];
      }, options);
  },
};
