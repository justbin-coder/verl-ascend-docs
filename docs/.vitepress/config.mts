import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Verl-Ascend Docs",
  description: "Verl-Ascend 全栈开发文档",
  
  // 忽略死链接检查（防止你还没创建文件时报错）
  ignoreDeadLinks: true,

  themeConfig: {
    siteTitle: 'Verl-Ascend 文档中心',

    // 顶部导航栏：保持极简，只留首页和GitHub
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub/GitCode', link: 'https://gitcode.com/Justbin/verl-ascend-docs' }
    ],

    // 侧边栏：核心改动在这里
    // 使用数组结构，代表这是“全局侧边栏”，所有页面都显示这个目录
    sidebar: [
      {
        text: '🚀 快速入门',
        collapsed: false, // 默认展开
        items: [
          { text: '项目简介', link: '/intro/about' },
          { text: '环境安装', link: '/intro/install' },
          { text: '快速开始 (Quick Start)', link: '/intro/quick-start' }
        ]
      },
      {
        text: '📖 核心指南',
        collapsed: false,
        items: [
          { text: '模型配置', link: '/core/config' },
          { text: '数据准备', link: '/core/data' },
          { text: '训练启动', link: '/core/train' }
        ]
      },
      {
        text: '🔥 进阶案例',
        collapsed: true, // 默认折叠，保持界面整洁
        items: [
          { text: '多机多卡训练', link: '/advanced/multi-node' },
          { text: '混合精度调优', link: '/advanced/amp' },
          { text: '自定义算子', link: '/advanced/custom-ops' }
        ]
      },
      {
        text: '🏭 行业实践',
        collapsed: true,
        items: [
          { text: '金融大模型案例', link: '/practice/finance' },
          { text: '医疗大模型案例', link: '/practice/medical' }
        ]
      },
      {
        text: '🔧 故障与排查',
        collapsed: true,
        items: [
          { text: '常见报错 (FAQ)', link: '/troubleshooting/faq' },
          { text: '日志分析指南', link: '/troubleshooting/logs' }
        ]
      },
      {
        text: '🤝 贡献指南',
        collapsed: true,
        items: [
          { text: '代码规范', link: '/contributing/code-style' },
          { text: '提交 PR 流程', link: '/contributing/pr-guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitcode.com/Justbin/verl-ascend-docs' }
    ],
    
    // 开启本地搜索
    search: {
      provider: 'local'
    }
  }
})