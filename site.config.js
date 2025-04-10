const CONFIG = {
  profile: {
    name: "erica weng",
    image: "/bird.png",
    bio: "I like birds",
    github: "",
    linkedin: "",
    email: "",
    instagram: "",
    role: "",
  },
  projects: '',
  // blog setting (required)
  blog: {
    title: "passer-lime",
    description: "erica's sparrow feed",
    theme: "auto", // ['light', 'dark', 'auto']
    image: "*.vercel.app/api/og?title=passer-lime",
  },

  // CONFIG configration (required)
  link: "https://passer-lime.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://passer-lime.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "ericaweng/passer",
      "issue-term": "og:title",
      label: "",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
