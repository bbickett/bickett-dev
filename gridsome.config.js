const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_variables.scss'),
      ],
    })
}


module.exports = {
  siteName: 'Brian Bickett',
  templates: {
    Article: "/blog/:year/:month/:day/:slug",
    //Tag: "/tag/:title",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Article",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
        resolveAbsolutePaths: true,
        remark: {
          autolinkClassName: "fas fa-hashtag",
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],

        },
      },
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
          config: {
              id: process.env.GOOGLE_ANALYTICS_ID,
          },
      },
  },  
  ],
  chainWebpack (config) {
      // Load variables for all vue-files
      const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

      types.forEach(type => {
          addStyleResource(config.module.rule('scss').oneOf(type))
      })
  },

  icon: './src/favicon.png'


}
