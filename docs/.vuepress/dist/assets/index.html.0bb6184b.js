import{e as n}from"./app.6b627dee.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>vue-admin-plus \u662F &#39;\u57FA\u4E8Evue3+TypeScript+vite\u5F00\u53D1\u7684\u57FA\u7840\u6846\u67B6</p><h2 id="\u76EE\u5F55\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u8BF4\u660E" aria-hidden="true">#</a> \u76EE\u5F55\u8BF4\u660E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 build                      # \u6784\u5EFA\u76F8\u5173
\u251C\u2500\u2500 mock                       # \u9879\u76EEmock \u6A21\u62DF\u6570\u636E
\u251C\u2500\u2500 plop-templates             # \u57FA\u672C\u6A21\u677F
\u251C\u2500\u2500 public                     # \u9759\u6001\u8D44\u6E90
\u2502   \u2502\u2500\u2500 favicon.ico            # favicon\u56FE\u6807
\u2502   \u2514\u2500\u2500 index.html             # html\u6A21\u677F
\u251C\u2500\u2500 src                        # \u6E90\u4EE3\u7801
\u2502   \u251C\u2500\u2500 api                    # \u6240\u6709\u8BF7\u6C42
\u2502   \u251C\u2500\u2500 assets                 # \u4E3B\u9898 \u5B57\u4F53\u7B49\u9759\u6001\u8D44\u6E90
\u2502   \u251C\u2500\u2500 components             # \u5168\u5C40\u516C\u7528\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 directive              # \u5168\u5C40\u6307\u4EE4
\u2502   \u251C\u2500\u2500 filters                # \u5168\u5C40 filter
\u2502   \u251C\u2500\u2500 icons                  # \u9879\u76EE\u6240\u6709 svg icons
\u2502   \u251C\u2500\u2500 lang                   # \u56FD\u9645\u5316 language
\u2502   \u251C\u2500\u2500 layout                 # \u5168\u5C40 layout
\u2502   \u251C\u2500\u2500 router                 # \u8DEF\u7531
\u2502   \u251C\u2500\u2500 store                  # \u5168\u5C40 store\u7BA1\u7406
\u2502   \u251C\u2500\u2500 styles                 # \u5168\u5C40\u6837\u5F0F
\u2502   \u251C\u2500\u2500 utils                  # \u5168\u5C40\u516C\u7528\u65B9\u6CD5
\u2502   \u251C\u2500\u2500 vendor                 # \u516C\u7528vendor
\u2502   \u251C\u2500\u2500 views                  # views \u6240\u6709\u9875\u9762
\u2502   \u251C\u2500\u2500 App.vue                # \u5165\u53E3\u9875\u9762
\u2502   \u251C\u2500\u2500 main.js                # \u5165\u53E3\u6587\u4EF6 \u52A0\u8F7D\u7EC4\u4EF6 \u521D\u59CB\u5316\u7B49
\u2502   \u2514\u2500\u2500 permission.js          # \u6743\u9650\u7BA1\u7406
\u251C\u2500\u2500 tests                      # \u6D4B\u8BD5
\u251C\u2500\u2500 .env.xxx                   # \u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u251C\u2500\u2500 .eslintrc.js               # eslint \u914D\u7F6E\u9879
\u251C\u2500\u2500 .babelrc                   # babel-loader \u914D\u7F6E
\u251C\u2500\u2500 .travis.yml                # \u81EA\u52A8\u5316CI\u914D\u7F6E
\u251C\u2500\u2500 vue.config.js              # vue-cli \u914D\u7F6E
\u251C\u2500\u2500 postcss.config.js          # postcss \u914D\u7F6E
\u2514\u2500\u2500 package.json               # package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,4);function r(l,p){return e}var c=s(a,[["render",r]]);export{c as default};
