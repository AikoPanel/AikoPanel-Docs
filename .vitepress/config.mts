import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Aiko Services",
  description: "Documents for AikoPanel and AikoServer",

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi'
    }
  },

  themeConfig: {

    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AikoPanel', link: `aikopanel/home` },
      { text: 'AikoServer', link: 'aikoserver/home' },
    ],

    sidebar: {
      '/aikopanel/' : [
          { text: 'Home', link: '/aikopanel/home.md' },
          { text: 'Installation', link: '/aikopanel/installation.md' },
          { text: 'Configuration', link: '/aikopanel/configuration.md' },
          { text: 'Deploy', link: '/aikopanel/deploy.md'},
          { text: 'Node', link: '/aikopanel/node.md' },
        ],
      '/aikoserver/' : [
          { text: 'Installation', link: '/aikoserver/installation.md' },
          { text: 'Configuration', link: '/aikoserver/configuration.md' },
        ],
      '/vi/aikopanel/' : [
          { text: 'Trang chủ', link: '/vi/aikopanel/home.md' },
          { text: 'Cài đặt', link: '/vi/aikopanel/installation.md' },
          { text: 'Cấu hình', link: '/vi/aikopanel/configuration.md' },
          { text: 'Triển khai', link: '/vi/aikopanel/deploy.md'},
          { text: 'Node', link: '/vi/aikopanel/node.md' },
        ],
      '/vi/aikoserver/' : [
          { text: 'Cài đặt', link: '/aikoserver/installation.md' },
          { text: 'Cấu hình', link: '/aikoserver/onfiguration.md' },
        ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AikoPanel' }
    ]
  }
})
