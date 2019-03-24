module.exports = {
  title: 'YZ UI',
  themeConfig: {
    displayAllHeaders: true, 
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: '/' }
    ],
    sidebar: [
      '/',
      '/install/',
      '/get-started/',
      {
      title: '组件',
      children: [
        '/components/button',
        '/components/button-group',
        '/components/input',
        '/components/grid', 
        '/components/container',
        '/components/toast',
        '/components/tabs',
        '/components/popover',
        '/components/collapse'
      ]
      }
    ]
  }
}  