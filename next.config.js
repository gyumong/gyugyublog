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
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});
