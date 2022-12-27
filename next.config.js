/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
    esmExternals: "loose",
  },
}
