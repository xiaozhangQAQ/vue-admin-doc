import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-53bc6c58","/components/a.html",{"title":"配置"},["/components/a","/components/a.md"]],
  ["v-557144f7","/components/b.html",{"title":"配置2"},["/components/b","/components/b.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":"快速上手"},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-fffb8e28","/guide/",{"title":"介绍"},["/guide/index.html","/guide/README.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
