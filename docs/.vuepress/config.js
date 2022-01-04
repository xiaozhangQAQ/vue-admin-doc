let sidebar = require('./configs/sidebar/index.js')
let navbar = require('./configs/navbar/index.js')
module.exports = {
  lang: 'zh-CN',
  title: '小Z',
  description: '基于vue3+TypeScript+vite开发的基础框架',
    // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/sys.png',
    repo: 'vuepress/vuepress-next',
    editLink: false,
    sidebar: sidebar,
    navbar
  },
  plugins: [
    [
      "vuepress-plugin-copy-code2",
      
    ],
  ]
}