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
          { text: 'install', link: '/aikopanel/install.md'},
          { text: 'Node', link: '/aikopanel/node.md' },
        ],
      '/aikoserver/' : [
          { text: 'Home', link: '/aikoserver/home.md'},
          { text: `install` , link: '/aikoserver/install.md'},
        ],
      '/vi/aikopanel/' : [
          { text: 'Trang chủ', link: '/vi/aikopanel/home.md' },
          { text: 'Cài đặt', link: '/vi/aikopanel/install.md'},
          { text: 'Node', link: '/vi/aikopanel/node.md' },
        ],
      '/vi/aikoserver/' : [
          { text: 'Trang chủ', link: '/vi/aikoserver/home.md'},
          { text: `Cài đặt` , link: '/vi/aikoserver/install.md'},
        ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/AikoPanel/repositories' }
    ]
  }
})
