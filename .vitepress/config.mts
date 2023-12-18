import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "AikoPanelv3 Docs",
  description: "Documentation for AikoPanelv3 and AikoServer",

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
      '/aikopanel/': [
        { text: 'Home', link: '/aikopanel/home.md' },
        {
          text: 'Deploy',
          items: [
            { text: 'aaPanel', link: '/aikopanel/deploy/aapanel.md' },
          ],
        },
        {
          text: 'Migrate to AikoPanel',
          items: [
            { text: 'AikoPanelv1', link: '/aikopanel/migrate/aikopanelv1.md' },
            { text: 'V2board v1.7.4', link: '/aikopanel/migrate/v2board-v1.7.4.md'},
            { text: 'V2board v1.7.3', link: '/aikopanel/migrate/v2board-v1.7.3.md'},
            { text: 'Nflash', link: '/aikopanel/migrate/nflash.md'},
          ],
        },
        {
          text: 'Information',
          items: [
            { text: 'Node', link: '/aikopanel/Information/node.md' },
          ],
        }
      ],
      '/aikoserver/': [
        { text: 'Home', link: '/aikoserver/home.md' },
        {
          text: 'Deploy',
          items: [
            { text: 'Install', link: '/aikoserver/install.md' },
          ],
        },
      ],
      '/vi/aikopanel/': [
        { text: 'Trang chủ', link: '/vi/aikopanel/home.md' },
        {
          text: 'Triển khai',
          items: [
            { text: 'aaPanel', link: '/vi/aikopanel/deploy/aapanel.md' },
          ],
        },
        {
          text: 'Chuyển đổi sang AikoPanel',
          items: [
            { text: 'AikoPanelv1', link: '/vi/aikopanel/migrate/aikopanelv1.md' },
            { text: 'V2board v1.7.4', link: '/vi/aikopanel/migrate/v2board-v1.7.4.md'},
            { text: 'V2board v1.7.3', link: '/vi/aikopanel/migrate/v2board-v1.7.3.md'},
            { text: 'Nflash', link: '/vi/aikopanel/migrate/nflash.md'},
          ],
        },
        {
          text: 'Thông tin',
          items: [
            { text: 'Nút', link: '/vi/aikopanel/information/node.md' },
          ],
        },
      ],
      '/vi/aikoserver/': [
        { text: 'Trang chủ', link: '/vi/aikoserver/home.md' },
        {
          text: 'Triển khai',
          items: [
            { text: 'Cài đặt', link: '/vi/aikoserver/install.md' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/AikoPanel/repositories' }
    ]
  }
})
