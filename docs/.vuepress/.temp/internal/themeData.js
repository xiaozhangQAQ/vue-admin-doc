export const themeData = {
  "logo": "/images/sys.png",
  "repo": "vuepress/vuepress-next",
  "editLink": false,
  "sidebar": {
    "/guide/": [
      {
        "text": "基础",
        "children": [
          "/guide/README.md",
          "/guide/getting-started.md"
        ]
      }
    ],
    "/components/": [
      {
        "text": "组件",
        "children": [
          "/components/a.md",
          "/components/b.md"
        ]
      }
    ]
  },
  "navbar": [
    {
      "text": "指南",
      "link": "/guide/"
    },
    {
      "text": "组件",
      "children": [
        "/components/a.md",
        "/components/b.md"
      ]
    },
    {
      "text": "相关资源",
      "children": [
        {
          "text": "vue3",
          "link": "https://v3.cn.vuejs.org/"
        },
        {
          "text": "vue-router4",
          "link": "https://next.router.vuejs.org/zh/introduction.html"
        },
        {
          "text": "element-plus",
          "link": "https://element-plus.gitee.io/zh-CN/resource/index.html"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
