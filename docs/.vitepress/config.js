export default {
    themeConfig:{
        siteTitle:'HANI TRADE',
        nav: [
            { text: 'Home', link: '/' },

        ],
        sidebar: [
            {
              text: 'Rithmic Services',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Introduction Services', link: '/' },
                { text: 'Response Code', link: '/response_code'},
                { text: 'Login Services', link: '/login' },
                { text: 'Order Services', link: '/order' },
                { text: 'Cancel Orders', link: '/cancel_order' },

              ]
            }
        ],
        carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        }
    }
    
}

