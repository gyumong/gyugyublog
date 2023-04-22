/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  i18n: {
    defaultLocale: "ko",
  },
  staticImage: true,
});

module.exports = withNextra({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});
