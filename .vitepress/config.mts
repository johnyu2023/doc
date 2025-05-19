import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '知识文档',
  description: '探索编程世界与有趣冷知识',
  themeConfig: {
    sidebar: [
      {
        text: 'Python',
        items: [
          { text: '首页', link: '/src/python/' },
          { text: '虚拟键码对照表', link: '/src/python/virtual-key-code.md' }
        ]
      },
      {
        text: '其他知识',
        items: [
          { text: '首页', link: '/src/other/' }
        ]
      }
    ]
  }
})
