export default {
  target: 'static',
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/pwa'],
  pwa: {
    icon: {
      source: '[srcDir]/[staticDir]/images/StrasbourgJS.jpg',
    },
    name: 'StrasbourgJS',
    description:
      'StrasbourgJS est un meetup qui parle de toutes les facettes du JavaScript.',
    meta: {
      name: 'StrasbourgJS',
      theme_color: '#ffd800',
      ogHost: 'strasbourgjs.org',
      twitterCard: 'summary',
    },
    manifest: {
      name: 'StrasbourgJS',
      description:
        'StrasbourgJS est un meetup qui parle de toutes les facettes du JavaScript.',
      short_name: 'StrasbourgJS',
      theme_color: '#ffd800',
      background_color: '#181818',
      start_url: '/',
      display: 'standalone',
    },
  },
  build: {},
}
