import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Verl-Ascend Docs",
  description: "Verl-Ascend 全栈开发文档",
  
  // 1. 【关键修改】GitHub Pages 必须配置 base 路径
  // 格式为: /仓库名称/ (注意前后都要有斜杠)
  base: '/verl-ascend-docs/', 

  // 忽略死链接检查
  ignoreDeadLinks: true,

  themeConfig: {
    siteTitle: 'Verl-Ascend 文档中心',

    // 2. 【修改】将顶部导航链接更新为 GitHub 地址
    // 请将链接中的 YourUsername 替换为你实际的 GitHub 用户名
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub 仓库', link: 'https://github.com/justbin-coder/verl-ascend-docs' }
    ],

    // 侧边栏保持不变
    sidebar: [
      {
        text: '🚀 快速入门',
        collapsed: false,
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
        collapsed: true,
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

    // 3. 【修改】更新右上角的小图标链接到 GitHub
    socialLinks: [
      { icon: 'github', link: 'https://github.com/justbin-coder/verl-ascend-docs' }
    ],
    
    // 开启本地搜索
    search: {
      provider: 'local'
    },

    // 推荐添加：页脚信息
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Verl-Ascend Team'
    }
  }
})