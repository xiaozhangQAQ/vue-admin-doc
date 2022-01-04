module.exports = [
    {
        text: '指南',
        link: '/guide/',
    },
    {
        text: '组件',
        children: [
            '/components/a.md',
            '/components/b.md'
        ]
    },
    {
        text: '相关资源',
        children: [
            {
                text: 'vue3',
                link: 'https://v3.cn.vuejs.org/',
            },
            {
                text: 'vue-router4',
                link: 'https://next.router.vuejs.org/zh/introduction.html',
            },
            {
                text: 'element-plus',
                link: 'https://element-plus.gitee.io/zh-CN/resource/index.html',
            }
        ]
    },
]
