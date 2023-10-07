const withNextIntl = require("next-intl/plugin")("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... any other config settings you may have ...
};

// Combine next-intl with your existing config
module.exports = withNextIntl(nextConfig);
