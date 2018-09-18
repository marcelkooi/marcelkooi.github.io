const base = {
  name: 'Marcel Kooi',
  url: 'https://marcelkooi.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${base.name}`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: '',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
