# 命名规范（组件名称）：
1、需要用大驼峰命名组件名。
2、具体的细则: 
​​命名规范​​：
使用 PascalCase (大驼峰) 命名法
如 UserCard、ProductList、AppHeader
​​命名结构​​：
(1)基础组件：BaseButton、BaseIcon
(2)页面组件：UserProfile、ProductDetail
(3)功能组件：SearchInput、ImageSlider
​​文件命名​​：保持文件名与组件名一致
如 UserCard.vue 对应 name: 'UserCard'


### 配置（代码提示）：
#### 1、路径提示
安装插件：
(1) Volar (Vue 官方推荐)
(2) Path Intellisense
(3) TypeScript Vue Plugin (Volar)


配置vue.config.js文件 :
在文件加入：
const path = require('path')

在类中加入：
configureWebpack: {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  }
}
