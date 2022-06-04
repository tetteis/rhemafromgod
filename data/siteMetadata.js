const siteMetadata = {
  title: 'Rhema from God',
  author: 'Tettei Shahday-Annang',
  headerTitle: '',
  description:
    'Reaching out to the world with the Gospel of Jesus Christ, making disciples of all nations.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://rhemafromgod.com',
  siteRepo: 'https://github.com/tetteis/rhemafromgod',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'info@rhemafromgod.com',
  twitter: 'https://twitter.com/rhemafromgod',
  facebook: 'https://facebook.com/rhemafromgod',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    googleAnalyticsId: 'UA-26448947-2', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'disqus', // supported providers: giscus, utterances, disqus
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
